package com.jaikrix.auth2Proj.repository;

import com.jaikrix.auth2Proj.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
}
