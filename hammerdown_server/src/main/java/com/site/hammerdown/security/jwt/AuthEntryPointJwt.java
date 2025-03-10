package com.site.hammerdown.security.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.site.hammerdown.common.model.APIResponseStatus;
import com.site.hammerdown.common.model.APIResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
@Slf4j
public class AuthEntryPointJwt implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException)
            throws IOException {
        log.error("Unauthorized error: {}", authException.getMessage());

        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

        final Map<String, Object> body = new HashMap<>();
        body.put("message", authException.getMessage());
        body.put("path", request.getServletPath());

        APIResponse apiResponse = APIResponse.builder()
                .data(body)
                .statusCode(HttpServletResponse.SC_UNAUTHORIZED)
                .status(APIResponseStatus.FAILURE)
                .errorMessage("Unauthorized")
                .build();

        final ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(response.getOutputStream(), apiResponse);
    }
}

