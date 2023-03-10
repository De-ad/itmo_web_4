package com.web.backend.security;

import com.web.backend.entity.UserEntity;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@Getter
@Setter
public class UserDetailsImpl implements UserDetails {

    private UserEntity user;

    public UserDetailsImpl(UserEntity user) {
        this.user = user;
    }


    public static UserDetailsImpl build(UserEntity user){
        return new UserDetailsImpl(
                user
        );
    }

    public UserEntity getUser(){
        return user;
    }

    public void setUsername(String name) {
        this.user.setUsername(name);
    }

    public void setPassword(String password) {
        this.user.setPassword(password);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
