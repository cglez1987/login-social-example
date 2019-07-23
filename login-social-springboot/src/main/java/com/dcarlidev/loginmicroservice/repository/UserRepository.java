package com.dcarlidev.loginmicroservice.repository;


import com.dcarlidev.loginmicroservice.model.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findByEmail(String email);

    Boolean existsByEmail(String email);

}
