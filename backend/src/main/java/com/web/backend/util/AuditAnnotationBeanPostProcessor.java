package com.web.backend.util;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Method;
import java.lang.reflect.Proxy;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Stream;

public class AuditAnnotationBeanPostProcessor implements BeanPostProcessor {
    private final AuditEntityRepository auditEntityRepository;
    private final Map<String, String> annotationMap = new HashMap<>();

    @Autowired
    public AuditAnnotationBeanPostProcessor(AuditEntityRepository auditEntityRepository) {
        this.auditEntityRepository = auditEntityRepository;
    }


    @Override
     public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        return bean;
    }

    @Override
     public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        if (hasAnnotation(bean)){
            getMethods(bean, beanName);
            Proxy.newProxyInstance(bean.getClass().getClassLoader(),
                    bean.getClass().getInterfaces(),
                    (proxy, method, args) -> {
                    String annotation = annotationMap.getOrDefault(method.getName(), null);
                    if (annotation != null) {
                        auditEntityRepository.save(new AuditEntity(LocalDateTime.now().toString(), method.getName()));
                    }
                    return method.invoke(bean, args);
            });
        }
        return bean;
    }

    private void getMethods(Object bean, String beanName){
        Method[] methods = ReflectionUtils.getAllDeclaredMethods(bean.getClass());
        for (Method method : methods) {
            Audit annotation = method.getAnnotation(Audit.class);
            if (annotation != null) {
                annotationMap.put(method.getName(), method.getName());
            }
        }
    }

    private boolean hasAnnotation(Object bean){
        return Stream.of(ReflectionUtils.getAllDeclaredMethods(bean.getClass()))
                .anyMatch(method -> AnnotationUtils.getAnnotation(method, Audit.class) != null);
    }



}
