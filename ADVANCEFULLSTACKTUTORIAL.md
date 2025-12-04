# 🏨 Advanced Full-Stack Hotel Management System
## Complete Guide: Angular + Spring Boot

[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2+-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![Angular](https://img.shields.io/badge/Angular-18+-red.svg)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Java](https://img.shields.io/badge/Java-17+-orange.svg)](https://www.oracle.com/java/)

> **A comprehensive, production-ready hotel management system demonstrating enterprise-level full-stack development with modern architecture patterns, reactive programming, and advanced techniques.**

---

## 📋 Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Backend Deep Dive](#backend-deep-dive)
5. [Frontend Deep Dive](#frontend-deep-dive)
6. [Advanced Patterns & Best Practices](#advanced-patterns--best-practices)
7. [Security Implementation](#security-implementation)
8. [Performance Optimization](#performance-optimization)
9. [Testing Strategies](#testing-strategies)
10. [Deployment Guide](#deployment-guide)
11. [Microservices Migration Path](#microservices-migration-path)

---

## 🏗️ Architecture Overview

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      CLIENT LAYER                            │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Angular 18 SPA (Signals + RxJS)                     │   │
│  │  - Standalone Components                             │   │
│  │  - Signal-based State Management                     │   │
│  │  - Reactive Forms & Routing                          │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                           ↕ HTTP/REST
┌─────────────────────────────────────────────────────────────┐
│                    API GATEWAY LAYER                         │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Spring Cloud Gateway (Optional for Microservices)   │   │
│  │  - Request Routing                                   │   │
│  │  - Load Balancing                                    │   │
│  │  - Circuit Breaker                                   │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                           ↕
┌─────────────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                         │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Spring Boot 3.2+ REST API                           │   │
│  │  - REST Controllers                                  │   │
│  │  - Service Layer (Business Logic)                   │   │
│  │  - Repository Layer (Data Access)                   │   │
│  │  - Security (JWT + Spring Security)                 │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                           ↕ JPA/Hibernate
┌─────────────────────────────────────────────────────────────┐
│                     DATA LAYER                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  PostgreSQL / MySQL Database                         │   │
│  │  - Normalized Schema                                 │   │
│  │  - Indexes & Constraints                             │   │
│  │  - Connection Pooling (HikariCP)                     │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Three-Layer Architecture Pattern

This application follows the **Controller-Service-Repository** pattern:

- **Controller Layer**: Handles HTTP requests, validation, and response formatting
- **Service Layer**: Contains business logic, transaction management
- **Repository Layer**: Manages data persistence and database operations

---

## 🚀 Technology Stack

### Backend Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Java** | 17+ | Core programming language |
| **Spring Boot** | 3.2+ | Application framework |
| **Spring Data JPA** | 3.2+ | Data access abstraction |
| **Hibernate** | 6.4+ | ORM implementation |
| **Spring Security** | 6.2+ | Authentication & authorization |
| **JWT** | 0.12.x | Token-based authentication |
| **PostgreSQL/MySQL** | 15+/8+ | Relational database |
| **Lombok** | 1.18+ | Boilerplate reduction |
| **MapStruct** | 1.5+ | Object mapping |
| **Flyway/Liquibase** | Latest | Database migration |
| **Spring Boot Actuator** | 3.2+ | Production monitoring |
| **JUnit 5** | 5.10+ | Unit testing |
| **Mockito** | 5.x | Mocking framework |
| **TestContainers** | 1.19+ | Integration testing |

### Frontend Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Angular** | 18+ | Frontend framework |
| **TypeScript** | 5.0+ | Type-safe JavaScript |
| **RxJS** | 7.8+ | Reactive programming |
| **Angular Signals** | 18+ | Fine-grained reactivity |
| **Angular Material** | 18+ | UI component library |
| **TailwindCSS** | 3.4+ | Utility-first CSS |
| **Jasmine** | 5.x | Testing framework |
| **Karma** | 6.x | Test runner |

---

## 📁 Project Structure

### Backend Structure (Spring Boot)

```
hotel-landon-backend/
├── src/
│   ├── main/
│   │   ├── java/com/hotellandon/
│   │   │   ├── HotelLandonApplication.java
│   │   │   ├── config/
│   │   │   │   ├── SecurityConfig.java
│   │   │   │   ├── JpaConfig.java
│   │   │   │   ├── CorsConfig.java
│   │   │   │   └── SwaggerConfig.java
│   │   │   ├── controller/
│   │   │   │   ├── RoomController.java
│   │   │   │   ├── ReservationController.java
│   │   │   │   ├── GuestController.java
│   │   │   │   └── AuthController.java
│   │   │   ├── service/
│   │   │   │   ├── RoomService.java
│   │   │   │   ├── ReservationService.java
│   │   │   │   ├── GuestService.java
│   │   │   │   └── impl/
│   │   │   ├── repository/
│   │   │   │   ├── RoomRepository.java
│   │   │   │   ├── ReservationRepository.java
│   │   │   │   └── GuestRepository.java
│   │   │   ├── model/
│   │   │   │   ├── entity/
│   │   │   │   │   ├── Room.java
│   │   │   │   │   ├── Reservation.java
│   │   │   │   │   ├── Guest.java
│   │   │   │   │   └── BaseEntity.java
│   │   │   │   └── enums/
│   │   │   ├── dto/
│   │   │   │   ├── RoomDTO.java
│   │   │   │   ├── ReservationDTO.java
│   │   │   │   └── GuestDTO.java
│   │   │   ├── mapper/
│   │   │   │   ├── RoomMapper.java
│   │   │   │   └── ReservationMapper.java
│   │   │   ├── security/
│   │   │   │   ├── JwtTokenProvider.java
│   │   │   │   ├── JwtAuthenticationFilter.java
│   │   │   │   └── CustomUserDetailsService.java
│   │   │   ├── exception/
│   │   │   │   ├── GlobalExceptionHandler.java
│   │   │   │   ├── ResourceNotFoundException.java
│   │   │   │   └── BusinessException.java
│   │   │   └── util/
│   │   └── resources/
│   │       ├── application.yml
│   │       ├── application-dev.yml
│   │       ├── application-prod.yml
│   │       └── db/migration/
│   └── test/
│       └── java/com/hotellandon/
├── pom.xml
└── Dockerfile
```

### Frontend Structure (Angular)

```
hotel-landon-frontend/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   │   ├── auth.guard.ts
│   │   │   │   └── role.guard.ts
│   │   │   ├── interceptors/
│   │   │   │   ├── auth.interceptor.ts
│   │   │   │   ├── error.interceptor.ts
│   │   │   │   └── loading.interceptor.ts
│   │   │   ├── services/
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── http-client.service.ts
│   │   │   │   └── storage.service.ts
│   │   │   └── models/
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── header/
│   │   │   │   ├── footer/
│   │   │   │   ├── loading-spinner/
│   │   │   │   └── error-display/
│   │   │   ├── directives/
│   │   │   ├── pipes/
│   │   │   └── utils/
│   │   ├── features/
│   │   │   ├── rooms/
│   │   │   │   ├── room-list/
│   │   │   │   ├── room-detail/
│   │   │   │   ├── room-form/
│   │   │   │   ├── room.service.ts
│   │   │   │   └── room.routes.ts
│   │   │   ├── reservations/
│   │   │   │   ├── reservation-list/
│   │   │   │   ├── reservation-create/
│   │   │   │   ├── reservation.service.ts
│   │   │   │   └── reservation.routes.ts
│   │   │   ├── guests/
│   │   │   └── auth/
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── assets/
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── styles/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── styles.scss
│   └── index.html
├── angular.json
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

---

## 🔧 Backend Deep Dive

### 1. Domain Model with JPA Best Practices

#### Base Entity Pattern

```java
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@Getter
@Setter
public abstract class BaseEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;
    
    @LastModifiedDate
    @Column(nullable = false)
    private LocalDateTime updatedAt;
    
    @CreatedBy
    @Column(nullable = false, updatable = false)
    private String createdBy;
    
    @LastModifiedBy
    @Column(nullable = false)
    private String lastModifiedBy;
    
    @Version
    private Integer version; // Optimistic locking
}
```

#### Room Entity with Advanced Mappings

```java
@Entity
@Table(name = "rooms", indexes = {
    @Index(name = "idx_room_number", columnList = "roomNumber"),
    @Index(name = "idx_room_status", columnList = "status")
})
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Room extends BaseEntity {
    
    @Column(nullable = false, unique = true, length = 10)
    private String roomNumber;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private RoomType roomType;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private RoomStatus status;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal pricePerNight;
    
    @Column(nullable = false)
    private Integer capacity;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @ElementCollection
    @CollectionTable(name = "room_amenities", 
        joinColumns = @JoinColumn(name = "room_id"))
    @Column(name = "amenity")
    private Set<String> amenities = new HashSet<>();
    
    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL, 
        orphanRemoval = true, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Reservation> reservations = new ArrayList<>();
    
    // Business methods
    public boolean isAvailable(LocalDate checkIn, LocalDate checkOut) {
        if (this.status != RoomStatus.AVAILABLE) {
            return false;
        }
        return reservations.stream()
            .filter(r -> r.getStatus() == ReservationStatus.CONFIRMED)
            .noneMatch(r -> datesOverlap(checkIn, checkOut, 
                r.getCheckInDate(), r.getCheckOutDate()));
    }
    
    private boolean datesOverlap(LocalDate start1, LocalDate end1, 
                                  LocalDate start2, LocalDate end2) {
        return !start1.isAfter(end2) && !end1.isBefore(start2);
    }
    
    public void addReservation(Reservation reservation) {
        reservations.add(reservation);
        reservation.setRoom(this);
    }
    
    public void removeReservation(Reservation reservation) {
        reservations.remove(reservation);
        reservation.setRoom(null);
    }
}
```

#### Reservation Entity with Bidirectional Relationships

```java
@Entity
@Table(name = "reservations", indexes = {
    @Index(name = "idx_reservation_dates", 
        columnList = "checkInDate, checkOutDate"),
    @Index(name = "idx_reservation_status", columnList = "status")
})
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Reservation extends BaseEntity {
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id", nullable = false)
    @JsonBackReference
    private Room room;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "guest_id", nullable = false)
    private Guest guest;
    
    @Column(nullable = false)
    private LocalDate checkInDate;
    
    @Column(nullable = false)
    private LocalDate checkOutDate;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private ReservationStatus status;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal totalPrice;
    
    @Column(nullable = false)
    private Integer numberOfGuests;
    
    @Column(columnDefinition = "TEXT")
    private String specialRequests;
    
    @PrePersist
    @PreUpdate
    private void calculateTotalPrice() {
        if (room != null && checkInDate != null && checkOutDate != null) {
            long nights = ChronoUnit.DAYS.between(checkInDate, checkOutDate);
            this.totalPrice = room.getPricePerNight()
                .multiply(BigDecimal.valueOf(nights));
        }
    }
    
    public long getNumberOfNights() {
        return ChronoUnit.DAYS.between(checkInDate, checkOutDate);
    }
    
    public boolean isActive() {
        return status == ReservationStatus.CONFIRMED && 
               checkOutDate.isAfter(LocalDate.now());
    }
}
```

### 2. Repository Layer with Custom Queries

```java
@Repository
public interface RoomRepository extends JpaRepository<Room, Long>, 
                                       JpaSpecificationExecutor<Room> {
    
    Optional<Room> findByRoomNumber(String roomNumber);
    
    @Query("""
        SELECT r FROM Room r 
        WHERE r.status = :status 
        AND r.roomType = :roomType 
        AND r.id NOT IN (
            SELECT res.room.id FROM Reservation res 
            WHERE res.status = 'CONFIRMED' 
            AND ((res.checkInDate <= :checkOut AND res.checkOutDate >= :checkIn))
        )
        """)
    List<Room> findAvailableRooms(
        @Param("checkIn") LocalDate checkIn,
        @Param("checkOut") LocalDate checkOut,
        @Param("roomType") RoomType roomType,
        @Param("status") RoomStatus status
    );
    
    @Query("SELECT r FROM Room r LEFT JOIN FETCH r.reservations WHERE r.id = :id")
    Optional<Room> findByIdWithReservations(@Param("id") Long id);
    
    @Query("""
        SELECT NEW com.hotellandon.dto.RoomAvailabilityDTO(
            r.id, r.roomNumber, r.roomType, r.pricePerNight,
            CAST(COUNT(res.id) AS long)
        )
        FROM Room r 
        LEFT JOIN r.reservations res 
        WHERE r.status = 'AVAILABLE'
        GROUP BY r.id, r.roomNumber, r.roomType, r.pricePerNight
        """)
    List<RoomAvailabilityDTO> findRoomAvailabilityStatistics();
    
    // Specification for dynamic filtering
    static Specification<Room> hasRoomType(RoomType roomType) {
        return (root, query, cb) -> 
            roomType == null ? null : cb.equal(root.get("roomType"), roomType);
    }
    
    static Specification<Room> hasPriceRange(BigDecimal minPrice, BigDecimal maxPrice) {
        return (root, query, cb) -> {
            if (minPrice != null && maxPrice != null) {
                return cb.between(root.get("pricePerNight"), minPrice, maxPrice);
            } else if (minPrice != null) {
                return cb.greaterThanOrEqualTo(root.get("pricePerNight"), minPrice);
            } else if (maxPrice != null) {
                return cb.lessThanOrEqualTo(root.get("pricePerNight"), maxPrice);
            }
            return null;
        };
    }
}
```

### 3. Service Layer with Business Logic

```java
@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class RoomServiceImpl implements RoomService {
    
    private final RoomRepository roomRepository;
    private final RoomMapper roomMapper;
    private final ApplicationEventPublisher eventPublisher;
    
    @Override
    @Transactional(readOnly = true)
    public Page<RoomDTO> findAllRooms(Pageable pageable) {
        log.debug("Fetching rooms with pagination: {}", pageable);
        return roomRepository.findAll(pageable)
            .map(roomMapper::toDTO);
    }
    
    @Override
    @Transactional(readOnly = true)
    public RoomDTO findRoomById(Long id) {
        log.debug("Fetching room by id: {}", id);
        return roomRepository.findById(id)
            .map(roomMapper::toDTO)
            .orElseThrow(() -> new ResourceNotFoundException(
                "Room not found with id: " + id));
    }
    
    @Override
    public RoomDTO createRoom(RoomDTO roomDTO) {
        log.info("Creating new room: {}", roomDTO.getRoomNumber());
        
        // Validate room number uniqueness
        if (roomRepository.findByRoomNumber(roomDTO.getRoomNumber()).isPresent()) {
            throw new BusinessException("Room number already exists: " 
                + roomDTO.getRoomNumber());
        }
        
        Room room = roomMapper.toEntity(roomDTO);
        room.setStatus(RoomStatus.AVAILABLE);
        Room savedRoom = roomRepository.save(room);
        
        // Publish domain event
        eventPublisher.publishEvent(new RoomCreatedEvent(this, savedRoom.getId()));
        
        return roomMapper.toDTO(savedRoom);
    }
    
    @Override
    public RoomDTO updateRoom(Long id, RoomDTO roomDTO) {
        log.info("Updating room with id: {}", id);
        
        Room existingRoom = roomRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException(
                "Room not found with id: " + id));
        
        // Update only allowed fields
        roomMapper.updateEntityFromDTO(roomDTO, existingRoom);
        Room updatedRoom = roomRepository.save(existingRoom);
        
        return roomMapper.toDTO(updatedRoom);
    }
    
    @Override
    public void deleteRoom(Long id) {
        log.info("Deleting room with id: {}", id);
        
        Room room = roomRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException(
                "Room not found with id: " + id));
        
        // Check for active reservations
        boolean hasActiveReservations = room.getReservations().stream()
            .anyMatch(Reservation::isActive);
        
        if (hasActiveReservations) {
            throw new BusinessException(
                "Cannot delete room with active reservations");
        }
        
        roomRepository.delete(room);
    }
    
    @Override
    @Transactional(readOnly = true)
    public List<RoomDTO> findAvailableRooms(LocalDate checkIn, LocalDate checkOut, 
                                            RoomType roomType) {
        log.debug("Searching available rooms from {} to {}, type: {}", 
            checkIn, checkOut, roomType);
        
        validateDates(checkIn, checkOut);
        
        return roomRepository.findAvailableRooms(
            checkIn, checkOut, roomType, RoomStatus.AVAILABLE
        ).stream()
         .map(roomMapper::toDTO)
         .collect(Collectors.toList());
    }
    
    @Override
    @Transactional(readOnly = true)
    public Page<RoomDTO> searchRooms(RoomSearchCriteria criteria, Pageable pageable) {
        Specification<Room> spec = Specification.where(null);
        
        if (criteria.getRoomType() != null) {
            spec = spec.and(RoomRepository.hasRoomType(criteria.getRoomType()));
        }
        
        if (criteria.getMinPrice() != null || criteria.getMaxPrice() != null) {
            spec = spec.and(RoomRepository.hasPriceRange(
                criteria.getMinPrice(), criteria.getMaxPrice()));
        }
        
        return roomRepository.findAll(spec, pageable)
            .map(roomMapper::toDTO);
    }
    
    private void validateDates(LocalDate checkIn, LocalDate checkOut) {
        if (checkIn == null || checkOut == null) {
            throw new IllegalArgumentException("Check-in and check-out dates are required");
        }
        if (checkIn.isBefore(LocalDate.now())) {
            throw new BusinessException("Check-in date cannot be in the past");
        }
        if (checkOut.isBefore(checkIn)) {
            throw new BusinessException("Check-out date must be after check-in date");
        }
    }
}
```

### 4. REST Controller with Validation

```java
@RestController
@RequestMapping("/api/v1/rooms")
@CrossOrigin(origins = "${app.cors.allowed-origins}")
@Validated
@Slf4j
@RequiredArgsConstructor
@Tag(name = "Room Management", description = "APIs for managing hotel rooms")
public class RoomController {
    
    private final RoomService roomService;
    
    @GetMapping
    @Operation(summary = "Get all rooms", description = "Retrieve paginated list of rooms")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Successfully retrieved rooms"),
        @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<ApiResponse<Page<RoomDTO>>> getAllRooms(
            @RequestParam(defaultValue = "0") @Min(0) int page,
            @RequestParam(defaultValue = "10") @Min(1) @Max(100) int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "ASC") String sortDir) {
        
        log.info("GET /api/v1/rooms - page: {}, size: {}", page, size);
        
        Sort sort = sortDir.equalsIgnoreCase("DESC") 
            ? Sort.by(sortBy).descending() 
            : Sort.by(sortBy).ascending();
        
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<RoomDTO> rooms = roomService.findAllRooms(pageable);
        
        return ResponseEntity.ok(
            ApiResponse.success("Rooms retrieved successfully", rooms)
        );
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Get room by ID")
    public ResponseEntity<ApiResponse<RoomDTO>> getRoomById(
            @PathVariable @Positive Long id) {
        
        log.info("GET /api/v1/rooms/{}", id);
        RoomDTO room = roomService.findRoomById(id);
        return ResponseEntity.ok(
            ApiResponse.success("Room retrieved successfully", room)
        );
    }
    
    @PostMapping
    @Operation(summary = "Create new room")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<RoomDTO>> createRoom(
            @Valid @RequestBody RoomDTO roomDTO) {
        
        log.info("POST /api/v1/rooms - Creating room: {}", roomDTO.getRoomNumber());
        RoomDTO createdRoom = roomService.createRoom(roomDTO);
        
        return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(ApiResponse.success("Room created successfully", createdRoom));
    }
    
    @PutMapping("/{id}")
    @Operation(summary = "Update existing room")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<RoomDTO>> updateRoom(
            @PathVariable @Positive Long id,
            @Valid @RequestBody RoomDTO roomDTO) {
        
        log.info("PUT /api/v1/rooms/{} - Updating room", id);
        RoomDTO updatedRoom = roomService.updateRoom(id, roomDTO);
        
        return ResponseEntity.ok(
            ApiResponse.success("Room updated successfully", updatedRoom)
        );
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete room")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<Void>> deleteRoom(
            @PathVariable @Positive Long id) {
        
        log.info("DELETE /api/v1/rooms/{}", id);
        roomService.deleteRoom(id);
        
        return ResponseEntity.ok(
            ApiResponse.success("Room deleted successfully", null)
        );
    }
    
    @GetMapping("/available")
    @Operation(summary = "Search available rooms")
    public ResponseEntity<ApiResponse<List<RoomDTO>>> findAvailableRooms(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) 
            LocalDate checkIn,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) 
            LocalDate checkOut,
            @RequestParam(required = false) RoomType roomType) {
        
        log.info("GET /api/v1/rooms/available - {} to {}", checkIn, checkOut);
        List<RoomDTO> availableRooms = roomService.findAvailableRooms(
            checkIn, checkOut, roomType
        );
        
        return ResponseEntity.ok(
            ApiResponse.success("Available rooms retrieved", availableRooms)
        );
    }
}
```

### 5. DTO Pattern with Validation

```java
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class RoomDTO {
    
    private Long id;
    
    @NotBlank(message = "Room number is required")
    @Size(min = 1, max = 10, message = "Room number must be between 1 and 10 characters")
    private String roomNumber;
    
    @NotNull(message = "Room type is required")
    private RoomType roomType;
    
    private RoomStatus status;
    
    @NotNull(message = "Price is required")
    @DecimalMin(value = "0.0", inclusive = false, message = "Price must be greater than 0")
    @Digits(integer = 10, fraction = 2, message = "Price format is invalid")
    private BigDecimal pricePerNight;
    
    @NotNull(message = "Capacity is required")
    @Min(value = 1, message = "Capacity must be at least 1")
    @Max(value = 10, message = "Capacity cannot exceed 10")
    private Integer capacity;
    
    @Size(max = 1000, message = "Description cannot exceed 1000 characters")
    private String description;
    
    private Set<String> amenities;
    
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    
    // Computed fields
    private Long totalReservations;
    private BigDecimal occupancyRate;
}
```

### 6. MapStruct Mapper

```java
@Mapper(componentModel = "spring", 
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface RoomMapper {
    
    @Mapping(target = "totalReservations", 
             expression = "java(countReservations(room))")
    RoomDTO toDTO(Room room);
    
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "reservations", ignore = true)
    Room toEntity(RoomDTO roomDTO);
    
    List<RoomDTO> toDTOList(List<Room> rooms);
    
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "reservations", ignore = true)
    void updateEntityFromDTO(RoomDTO dto, @MappingTarget Room entity);
    
    default Long countReservations(Room room) {
        return room.getReservations() != null 
            ? (long) room.getReservations().size() 
            : 0L;
    }
}
```

### 7. Global Exception Handler

```java
@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {
    
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiResponse<Void>> handleResourceNotFound(
            ResourceNotFoundException ex, WebRequest request) {
        
        log.error("Resource not found: {}", ex.getMessage());
        return ResponseEntity
            .status(HttpStatus.NOT_FOUND)
            .body(ApiResponse.error(ex.getMessage(), HttpStatus.NOT_FOUND.value()));
    }
    
    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<ApiResponse<Void>> handleBusinessException(
            BusinessException ex, WebRequest request) {
        
        log.error("Business exception: {}", ex.getMessage());
        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(ApiResponse.error(ex.getMessage(), HttpStatus.BAD_REQUEST.value()));
    }
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<Map<String, String>>> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        
        log.error("Validation failed: {}", errors);
        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(ApiResponse.error("Validation failed", 
                  HttpStatus.BAD_REQUEST.value(), errors));
    }
    
    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<ApiResponse<Void>> handleDataIntegrityViolation(
            DataIntegrityViolationException ex) {
        
        log.error("Data integrity violation: {}", ex.getMessage());
        return ResponseEntity
            .status(HttpStatus.CONFLICT)
            .body(ApiResponse.error("Data integrity violation occurred", 
                  HttpStatus.CONFLICT.value()));
    }
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse<Void>> handleGlobalException(
            Exception ex, WebRequest request) {
        
        log.error("Unexpected error occurred", ex);
        return ResponseEntity
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(ApiResponse.error("An unexpected error occurred", 
                  HttpStatus.INTERNAL_SERVER_ERROR.value()));
    }
}
```

### 8. Security Configuration

```java
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    
    private final JwtAuthenticationFilter jwtAuthFilter;
    private final CustomUserDetailsService userDetailsService;
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .sessionManagement(session -> 
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**", "/api/v1/public/**").permitAll()
                .requestMatchers("/swagger-ui/**", "/v3/api-docs/**").permitAll()
                .requestMatchers("/actuator/health", "/actuator/info").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/v1/rooms/**").permitAll()
                .requestMatchers("/api/v1/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .authenticationProvider(authenticationProvider())
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .exceptionHandling(ex -> ex
                .authenticationEntryPoint(
                    (request, response, authException) -> {
                        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                        response.setContentType("application/json");
                        response.getWriter().write(
                            "{\"error\":\"Unauthorized\",\"message\":\"" 
                            + authException.getMessage() + "\"}"
                        );
                    }
                )
            );
        
        return http.build();
    }
    
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        configuration.setMaxAge(3600L);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", configuration);
        return source;
    }
    
    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }
    
    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}
```

### 9. JWT Token Provider

```java
@Component
@Slf4j
public class JwtTokenProvider {
    
    @Value("${jwt.secret}")
    private String jwtSecret;
    
    @Value("${jwt.expiration}")
    private long jwtExpiration;
    
    private Key getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(jwtSecret);
        return Keys.hmacShaKeyFor(keyBytes);
    }
    
    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("roles", userDetails.getAuthorities().stream()
            .map(GrantedAuthority::getAuthority)
            .collect(Collectors.toList()));
        
        return Jwts.builder()
            .setClaims(claims)
            .setSubject(userDetails.getUsername())
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + jwtExpiration))
            .signWith(getSigningKey(), SignatureAlgorithm.HS512)
            .compact();
    }
    
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }
    
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    
    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
            .setSigningKey(getSigningKey())
            .build()
            .parseClaimsJws(token)
            .getBody();
    }
    
    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return username.equals(userDetails.getUsername()) && !isTokenExpired(token);
    }
    
    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }
    
    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }
}
```

### 10. Application Configuration

```yaml
# application.yml
spring:
  application:
    name: hotel-landon-api
  
  datasource:
    url: ${DB_URL:jdbc:postgresql://localhost:5432/hotel_landon}
    username: ${DB_USERNAME:postgres}
    password: ${DB_PASSWORD:password}
    driver-class-name: org.postgresql.Driver
    hikari:
      maximum-pool-size: 10
      minimum-idle: 5
      connection-timeout: 30000
      idle-timeout: 600000
      max-lifetime: 1800000
  
  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect
        format_sql: true
        use_sql_comments: true
        jdbc:
          batch_size: 20
        order_inserts: true
        order_updates: true
    open-in-view: false
  
  flyway:
    enabled: true
    baseline-on-migrate: true
    locations: classpath:db/migration
  
  jackson:
    serialization:
      write-dates-as-timestamps: false
    time-zone: UTC

jwt:
  secret: ${JWT_SECRET:your-256-bit-secret-key-change-this-in-production}
  expiration: 86400000 # 24 hours

app:
  cors:
    allowed-origins: ${CORS_ORIGINS:http://localhost:4200}

logging:
  level:
    com.hotellandon: DEBUG
    org.springframework.web: INFO
    org.hibernate.SQL: DEBUG
    org.hibernate.type.descriptor.sql.BasicBinder: TRACE

management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,prometheus
  endpoint:
    health:
      show-details: when-authorized
```

---

## 🎨 Frontend Deep Dive

### 1. Angular Standalone Architecture

#### App Configuration (app.config.ts)

```typescript
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        errorInterceptor,
        loadingInterceptor
      ])
    ),
    provideAnimations()
  ]
};
```

### 2. Signal-Based State Management

```typescript
// room.service.ts
import { Injectable, signal, computed, effect } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Room {
  id: number;
  roomNumber: string;
  roomType: RoomType;
  status: RoomStatus;
  pricePerNight: number;
  capacity: number;
  description: string;
  amenities: string[];
}

@Injectable({ providedIn: 'root' })
export class RoomService {
  private readonly apiUrl = `${environment.apiUrl}/rooms`;
  
  // Signals for reactive state
  private roomsSignal = signal<Room[]>([]);
  private loadingSignal = signal<boolean>(false);
  private errorSignal = signal<string | null>(null);
  private selectedRoomSignal = signal<Room | null>(null);
  
  // Computed signals
  readonly rooms = this.roomsSignal.asReadonly();
  readonly loading = this.loadingSignal.asReadonly();
  readonly error = this.errorSignal.asReadonly();
  readonly selectedRoom = this.selectedRoomSignal.asReadonly();
  
  readonly availableRooms = computed(() => 
    this.roomsSignal().filter(room => room.status === 'AVAILABLE')
  );
  
  readonly roomCount = computed(() => this.roomsSignal().length);
  
  readonly averagePrice = computed(() => {
    const rooms = this.roomsSignal();
    if (rooms.length === 0) return 0;
    const total = rooms.reduce((sum, room) => sum + room.pricePerNight, 0);
    return total / rooms.length;
  });
  
  constructor(private http: HttpClient) {
    // Effect for logging state changes
    effect(() => {
      console.log('Rooms updated:', this.roomsSignal().length);
    });
  }
  
  loadRooms(page: number = 0, size: number = 10): Observable<PageResponse<Room>> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    return this.http.get<PageResponse<Room>>(this.apiUrl, { params }).pipe(
      tap(response => {
        this.roomsSignal.set(response.content);
        this.loadingSignal.set(false);
      }),
      catchError(error => {
        this.errorSignal.set(error.message);
        this.loadingSignal.set(false);
        return throwError(() => error);
      })
    );
  }
  
  getRoomById(id: number): Observable<Room> {
    this.loadingSignal.set(true);
    
    return this.http.get<ApiResponse<Room>>(`${this.apiUrl}/${id}`).pipe(
      tap(response => {
        this.selectedRoomSignal.set(response.data);
        this.loadingSignal.set(false);
      }),
      catchError(error => {
        this.errorSignal.set(error.message);
        this.loadingSignal.set(false);
        return throwError(() => error);
      })
    );
  }
  
  createRoom(room: Partial<Room>): Observable<Room> {
    return this.http.post<ApiResponse<Room>>(this.apiUrl, room).pipe(
      tap(response => {
        // Update local state
        this.roomsSignal.update(rooms => [...rooms, response.data]);
      })
    );
  }
  
  updateRoom(id: number, room: Partial<Room>): Observable<Room> {
    return this.http.put<ApiResponse<Room>>(`${this.apiUrl}/${id}`, room).pipe(
      tap(response => {
        // Update local state
        this.roomsSignal.update(rooms => 
          rooms.map(r => r.id === id ? response.data : r)
        );
      })
    );
  }
  
  deleteRoom(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        // Update local state
        this.roomsSignal.update(rooms => rooms.filter(r => r.id !== id));
      })
    );
  }
  
  searchAvailableRooms(
    checkIn: string,
    checkOut: string,
    roomType?: RoomType
  ): Observable<Room[]> {
    let params = new HttpParams()
      .set('checkIn', checkIn)
      .set('checkOut', checkOut);
    
    if (roomType) {
      params = params.set('roomType', roomType);
    }
    
    return this.http.get<ApiResponse<Room[]>>(
      `${this.apiUrl}/available`,
      { params }
    ).pipe(
      tap(response => {
        this.roomsSignal.set(response.data);
      })
    );
  }
}
```

### 3. Modern Component with Signals

```typescript
// room-list.component.ts
import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RoomService, Room, RoomType } from '../../services/room.service';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-gray-800">Available Rooms</h1>
        <button 
          routerLink="/rooms/create"
          class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
          Add New Room
        </button>
      </div>
      
      <!-- Filters -->
      <div class="bg-white p-6 rounded-lg shadow-md mb-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            [(ngModel)]="searchTerm"
            (ngModelChange)="onSearchChange()"
            placeholder="Search by room number..."
            class="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
          
          <select
            [(ngModel)]="selectedRoomType"
            (ngModelChange)="onFilterChange()"
            class="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
            <option value="">All Room Types</option>
            <option value="SINGLE">Single</option>
            <option value="DOUBLE">Double</option>
            <option value="SUITE">Suite</option>
            <option value="DELUXE">Deluxe</option>
          </select>
          
          <input
            type="number"
            [(ngModel)]="minPrice"
            (ngModelChange)="onFilterChange()"
            placeholder="Min Price"
            class="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
          
          <input
            type="number"
            [(ngModel)]="maxPrice"
            (ngModelChange)="onFilterChange()"
            placeholder="Max Price"
            class="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
        </div>
      </div>
      
      <!-- Loading State -->
      @if (roomService.loading()) {
        <div class="flex justify-center items-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      }
      
      <!-- Error State -->
      @if (roomService.error()) {
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
          {{ roomService.error() }}
        </div>
      }
      
      <!-- Room Grid -->
      @if (!roomService.loading() && filteredRooms().length > 0) {
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (room of filteredRooms(); track room.id) {
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div class="relative h-48 bg-gradient-to-r from-blue-400 to-blue-600">
                <div class="absolute top-4 right-4">
                  <span class="px-3 py-1 bg-white rounded-full text-sm font-semibold"
                        [class.text-green-600]="room.status === 'AVAILABLE'"
                        [class.text-red-600]="room.status === 'OCCUPIED'"
                        [class.text-yellow-600]="room.status === 'MAINTENANCE'">
                    {{ room.status }}
                  </span>
                </div>
                <div class="absolute bottom-4 left-4 text-white">
                  <h3 class="text-2xl font-bold">Room {{ room.roomNumber }}</h3>
                  <p class="text-sm opacity-90">{{ room.roomType }}</p>
                </div>
              </div>
              
              <div class="p-6">
                <p class="text-gray-600 mb-4 line-clamp-2">{{ room.description }}</p>
                
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <span class="text-2xl font-bold text-blue-600">
                      ${{ room.pricePerNight }}
                    </span>
                    <span class="text-gray-500 text-sm">/night</span>
                  </div>
                  <div class="text-gray-600">
                    <i class="fas fa-users"></i>
                    Up to {{ room.capacity }} guests
                  </div>
                </div>
                
                @if (room.amenities && room.amenities.length > 0) {
                  <div class="mb-4">
                    <div class="flex flex-wrap gap-2">
                      @for (amenity of room.amenities.slice(0, 3); track amenity) {
                        <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {{ amenity }}
                        </span>
                      }
                      @if (room.amenities.length > 3) {
                        <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          +{{ room.amenities.length - 3 }} more
                        </span>
                      }
                    </div>
                  </div>
                }
                
                <div class="flex gap-2">
                  <button 
                    [routerLink]="['/rooms', room.id]"
                    class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                    View Details
                  </button>
                  <button 
                    (click)="onDelete(room.id)"
                    class="px-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      } @else if (!roomService.loading()) {
        <div class="text-center py-12 text-gray-500">
          <i class="fas fa-inbox text-6xl mb-4"></i>
          <p class="text-xl">No rooms found</p>
        </div>
      }
      
      <!-- Stats -->
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-gray-600 text-sm font-semibold mb-2">Total Rooms</h3>
          <p class="text-3xl font-bold text-blue-600">{{ roomService.roomCount() }}</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-gray-600 text-sm font-semibold mb-2">Available</h3>
          <p class="text-3xl font-bold text-green-600">
            {{ roomService.availableRooms().length }}
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-gray-600 text-sm font-semibold mb-2">Average Price</h3>
          <p class="text-3xl font-bold text-purple-600">
            ${{ roomService.averagePrice() | number:'1.2-2' }}
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class RoomListComponent implements OnInit {
  searchTerm = signal('');
  selectedRoomType = signal<string>('');
  minPrice = signal<number | null>(null);
  maxPrice = signal<number | null>(null);
  
  filteredRooms = computed(() => {
    let rooms = this.roomService.rooms();
    
    // Filter by search term
    const search = this.searchTerm().toLowerCase();
    if (search) {
      rooms = rooms.filter(room => 
        room.roomNumber.toLowerCase().includes(search) ||
        room.description?.toLowerCase().includes(search)
      );
    }
    
    // Filter by room type
    const type = this.selectedRoomType();
    if (type) {
      rooms = rooms.filter(room => room.roomType === type);
    }
    
    // Filter by price range
    const min = this.minPrice();
    const max = this.maxPrice();
    if (min !== null) {
      rooms = rooms.filter(room => room.pricePerNight >= min);
    }
    if (max !== null) {
      rooms = rooms.filter(room => room.pricePerNight <= max);
    }
    
    return rooms;
  });
  
  constructor(public roomService: RoomService) {}
  
  ngOnInit(): void {
    this.loadRooms();
  }
  
  loadRooms(): void {
    this.roomService.loadRooms().subscribe();
  }
  
  onSearchChange(): void {
    // Debouncing handled by signal reactivity
  }
  
  onFilterChange(): void {
    // Filters are reactive through computed signals
  }
  
  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this room?')) {
      this.roomService.deleteRoom(id).subscribe({
        next: () => {
          console.log('Room deleted successfully');
        },
        error: (error) => {
          console.error('Error deleting room:', error);
          alert('Failed to delete room');
        }
      });
    }
  }
}
```

### 4. Reactive Forms with Validation

```typescript
// room-form.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  FormBuilder, 
  FormGroup, 
  Validators, 
  ReactiveFormsModule 
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomService, RoomType } from '../../services/room.service';

@Component({
  selector: 'app-room-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container mx-auto px-4 py-8 max-w-2xl">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">
        {{ isEditMode ? 'Edit' : 'Create' }} Room
      </h1>
      
      <form [formGroup]="roomForm" (ngSubmit)="onSubmit()" 
            class="bg-white p-8 rounded-lg shadow-md">
        
        <!-- Room Number -->
        <div class="mb-6">
          <label class="block text-gray-700 font-semibold mb-2">
            Room Number *
          </label>
          <input
            type="text"
            formControlName="roomNumber"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            [class.border-red-500]="isFieldInvalid('pricePerNight')">
          @if (isFieldInvalid('pricePerNight')) {
            <p class="text-red-500 text-sm mt-1">
              {{ getErrorMessage('pricePerNight') }}
            </p>
          }
        </div>
        
        <!-- Capacity -->
        <div class="mb-6">
          <label class="block text-gray-700 font-semibold mb-2">
            Capacity *
          </label>
          <input
            type="number"
            formControlName="capacity"
            min="1"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            [class.border-red-500]="isFieldInvalid('capacity')">
          @if (isFieldInvalid('capacity')) {
            <p class="text-red-500 text-sm mt-1">
              Capacity must be at least 1
            </p>
          }
        </div>
        
        <!-- Description -->
        <div class="mb-6">
          <label class="block text-gray-700 font-semibold mb-2">
            Description
          </label>
          <textarea
            formControlName="description"
            rows="4"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            maxlength="1000"></textarea>
        </div>
        
        <!-- Amenities -->
        <div class="mb-6">
          <label class="block text-gray-700 font-semibold mb-2">
            Amenities
          </label>
          <div class="grid grid-cols-2 gap-2">
            @for (amenity of availableAmenities; track amenity) {
              <label class="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  [value]="amenity"
                  (change)="onAmenityChange($event, amenity)"
                  class="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500">
                <span>{{ amenity }}</span>
              </label>
            }
          </div>
        </div>
        
        <!-- Submit Buttons -->
        <div class="flex gap-4">
          <button
            type="submit"
            [disabled]="!roomForm.valid || submitting"
            class="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold">
            {{ submitting ? 'Saving...' : (isEditMode ? 'Update' : 'Create') }}
          </button>
          <button
            type="button"
            (click)="onCancel()"
            class="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 rounded-lg font-semibold">
            Cancel
          </button>
        </div>
      </form>
    </div>
  `
})
export class RoomFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private roomService = inject(RoomService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  
  roomForm!: FormGroup;
  isEditMode = false;
  roomId?: number;
  submitting = false;
  
  availableAmenities = [
    'WiFi', 'TV', 'Air Conditioning', 'Mini Bar',
    'Room Service', 'Balcony', 'Sea View', 'Bathtub'
  ];
  
  selectedAmenities = new Set<string>();
  
  ngOnInit(): void {
    this.initForm();
    this.checkEditMode();
  }
  
  initForm(): void {
    this.roomForm = this.fb.group({
      roomNumber: ['', [Validators.required, Validators.maxLength(10)]],
      roomType: ['', Validators.required],
      pricePerNight: [null, [Validators.required, Validators.min(0.01)]],
      capacity: [1, [Validators.required, Validators.min(1), Validators.max(10)]],
      description: ['', Validators.maxLength(1000)]
    });
  }
  
  checkEditMode(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.roomId = +params['id'];
        this.loadRoom(this.roomId);
      }
    });
  }
  
  loadRoom(id: number): void {
    this.roomService.getRoomById(id).subscribe({
      next: (response) => {
        const room = response.data;
        this.roomForm.patchValue(room);
        if (room.amenities) {
          this.selectedAmenities = new Set(room.amenities);
        }
      },
      error: (error) => {
        console.error('Error loading room:', error);
        alert('Failed to load room details');
        this.router.navigate(['/rooms']);
      }
    });
  }
  
  onAmenityChange(event: Event, amenity: string): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedAmenities.add(amenity);
    } else {
      this.selectedAmenities.delete(amenity);
    }
  }
  
  isFieldInvalid(fieldName: string): boolean {
    const field = this.roomForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  
  getErrorMessage(fieldName: string): string {
    const field = this.roomForm.get(fieldName);
    if (field?.hasError('required')) {
      return `${fieldName} is required`;
    }
    if (field?.hasError('min')) {
      return `${fieldName} must be greater than ${field.errors?.['min'].min}`;
    }
    if (field?.hasError('max')) {
      return `${fieldName} cannot exceed ${field.errors?.['max'].max}`;
    }
    if (field?.hasError('maxlength')) {
      return `${fieldName} is too long`;
    }
    return '';
  }
  
  onSubmit(): void {
    if (this.roomForm.invalid) {
      this.roomForm.markAllAsTouched();
      return;
    }
    
    this.submitting = true;
    const roomData = {
      ...this.roomForm.value,
      amenities: Array.from(this.selectedAmenities)
    };
    
    const operation = this.isEditMode
      ? this.roomService.updateRoom(this.roomId!, roomData)
      : this.roomService.createRoom(roomData);
    
    operation.subscribe({
      next: () => {
        this.submitting = false;
        this.router.navigate(['/rooms']);
      },
      error: (error) => {
        this.submitting = false;
        console.error('Error saving room:', error);
        alert('Failed to save room');
      }
    });
  }
  
  onCancel(): void {
    this.router.navigate(['/rooms']);
  }
}
```

### 5. HTTP Interceptors

```typescript
// auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('access_token');
  
  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedRequest);
  }
  
  return next(req);
};

// error.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  
  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        // Unauthorized - redirect to login
        localStorage.removeItem('access_token');
        router.navigate(['/login']);
      } else if (error.status === 403) {
        // Forbidden
        console.error('Access denied');
      } else if (error.status === 404) {
        console.error('Resource not found');
      } else if (error.status >= 500) {
        console.error('Server error:', error);
      }
      
      return throwError(() => error);
    })
  );
};

// loading.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  
  loadingService.show();
  
  return next(req).pipe(
    finalize(() => loadingService.hide())
  );
};
```

---

## 🎯 Advanced Patterns & Best Practices

### 1. Custom Validators

```typescript
// custom-validators.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static dateRange(startDateField: string, endDateField: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const startDate = control.get(startDateField)?.value;
      const endDate = control.get(endDateField)?.value;
      
      if (startDate && endDate && new Date(startDate) >= new Date(endDate)) {
        return { dateRange: true };
      }
      
      return null;
    };
  }
  
  static futureDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;
      
      const inputDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (inputDate < today) {
        return { pastDate: true };
      }
      
      return null;
    };
  }
}
```

### 2. Repository Pattern with Specifications

```java
public class RoomSpecifications {
    
    public static Specification<Room> withFilters(RoomSearchCriteria criteria) {
        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();
            
            if (criteria.getRoomType() != null) {
                predicates.add(cb.equal(root.get("roomType"), criteria.getRoomType()));
            }
            
            if (criteria.getStatus() != null) {
                predicates.add(cb.equal(root.get("status"), criteria.getStatus()));
            }
            
            if (criteria.getMinPrice() != null) {
                predicates.add(cb.greaterThanOrEqualTo(
                    root.get("pricePerNight"), criteria.getMinPrice()));
            }
            
            if (criteria.getMaxPrice() != null) {
                predicates.add(cb.lessThanOrEqualTo(
                    root.get("pricePerNight"), criteria.getMaxPrice()));
            }
            
            if (criteria.getAmenities() != null && !criteria.getAmenities().isEmpty()) {
                Join<Room, String> amenitiesJoin = root.join("amenities");
                predicates.add(amenitiesJoin.in(criteria.getAmenities()));
            }
            
            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }
}
```

### 3. Caching Strategy

```java
@Configuration
@EnableCaching
public class CacheConfig {
    
    @Bean
    public CacheManager cacheManager() {
        SimpleCacheManager cacheManager = new SimpleCacheManager();
        cacheManager.setCaches(Arrays.asList(
            new ConcurrentMapCache("rooms"),
            new ConcurrentMapCache("reservations"),
            new ConcurrentMapCache("guests")
        ));
        return cacheManager;
    }
}

// Service with caching
@Service
public class RoomServiceImpl implements RoomService {
    
    @Cacheable(value = "rooms", key = "#id")
    public RoomDTO findRoomById(Long id) {
        // Method implementation
    }
    
    @CachePut(value = "rooms", key = "#result.id")
    public RoomDTO updateRoom(Long id, RoomDTO roomDTO) {
        // Method implementation
    }
    
    @CacheEvict(value = "rooms", key = "#id")
    public void deleteRoom(Long id) {
        // Method implementation
    }
}
```

### 4. Event-Driven Architecture

```java
// Domain Event
@Getter
public class RoomCreatedEvent extends ApplicationEvent {
    private final Long roomId;
    
    public RoomCreatedEvent(Object source, Long roomId) {
        super(source);
        this.roomId = roomId;
    }
}

// Event Listener
@Component
@Slf4j
public class RoomEventListener {
    
    @EventListener
    @Async
    public void handleRoomCreated(RoomCreatedEvent event) {
        log.info("Room created with ID: {}", event.getRoomId());
        // Send notification, update analytics, etc.
    }
}

// Enable Async
@Configuration
@EnableAsync
public class AsyncConfig implements AsyncConfigurer {
    
    @Override
    public Executor getAsyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(10);
        executor.setQueueCapacity(100);
        executor.setThreadNamePrefix("async-");
        executor.initialize();
        return executor;
    }
}
```

---

## 🔒 Security Implementation

### 1. Advanced JWT Configuration

```java
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    
    @Autowired
    private JwtTokenProvider tokenProvider;
    
    @Autowired
    private CustomUserDetailsService userDetailsService;
    
    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {
        
        try {
            String jwt = extractJwtFromRequest(request);
            
            if (StringUtils.hasText(jwt) && tokenProvider.validateToken(jwt)) {
                String username = tokenProvider.extractUsername(jwt);
                UserDetails userDetails = userDetailsService.loadUserByUsername(username);
                
                UsernamePasswordAuthenticationToken authentication = 
                    new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                
                authentication.setDetails(
                    new WebAuthenticationDetailsSource().buildDetails(request));
                
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } catch (Exception ex) {
            logger.error("Could not set user authentication", ex);
        }
        
        filterChain.doFilter(request, response);
    }
    
    private String extractJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}
```

### 2. Role-Based Access Control

```java
@Entity
@Table(name = "users")
@Getter
@Setter
public class User extends BaseEntity {
    
    @Column(unique = true, nullable = false)
    private String username;
    
    @Column(nullable = false)
    private String password;
    
    @Column(unique = true, nullable = false)
    private String email;
    
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "user_roles",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles = new HashSet<>();
}

@Entity
@Table(name = "roles")
@Getter
@Setter
public class Role {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Enumerated(EnumType.STRING)
    @Column(unique = true)
    private RoleName name;
    
    @ManyToMany(mappedBy = "roles")
    private Set<User> users = new HashSet<>();
}

public enum RoleName {
    ROLE_USER,
    ROLE_ADMIN,
    ROLE_MANAGER
}
```

---

## ⚡ Performance Optimization

### 1. Database Query Optimization

```java
// N+1 Problem Solution
@Query("SELECT DISTINCT r FROM Room r LEFT JOIN FETCH r.reservations WHERE r.id IN :ids")
List<Room> findRoomsWithReservations(@Param("ids") List<Long> ids);

// Batch Size Configuration
@Entity
@BatchSize(size = 10)
public class Room extends BaseEntity {
    // ...
}

// application.yml
spring:
  jpa:
    properties:
      hibernate:
        jdbc:
          batch_size: 20
        order_inserts: true
        order_updates: true
```

### 2. Connection Pooling

```yaml
spring:
  datasource:
    hikari:
      maximum-pool-size: 10
      minimum-idle: 5
      connection-timeout: 30000
      idle-timeout: 600000
      max-lifetime: 1800000
      leak-detection-threshold: 60000
```

### 3. Angular Performance

```typescript
// OnPush Change Detection
@Component({
  selector: 'app-room-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `...`
})
export class RoomCardComponent {
  @Input() room!: Room;
}

// TrackBy Function
@Component({
  template: `
    @for (room of rooms; track trackByRoomId($index, room)) {
      <app-room-card [room]="room" />
    }
  `
})
export class RoomListComponent {
  trackByRoomId(index: number, room: Room): number {
    return room.id;
  }
}

// Lazy Loading
export const routes: Routes = [
  {
    path: 'rooms',
    loadComponent: () => import('./features/rooms/room-list/room-list.component')
      .then(m => m.RoomListComponent)
  }
];
```

---

## 🧪 Testing Strategies

### 1. Backend Unit Tests

```java
@ExtendWith(MockitoExtension.class)
class RoomServiceImplTest {
    
    @Mock
    private RoomRepository roomRepository;
    
    @Mock
    private RoomMapper roomMapper;
    
    @InjectMocks
    private RoomServiceImpl roomService;
    
    @Test
    void testFindRoomById_Success() {
        // Given
        Long roomId = 1L;
        Room room = Room.builder()
            .id(roomId)
            .roomNumber("101")
            .build();
        RoomDTO expectedDTO = new RoomDTO();
        
        when(roomRepository.findById(roomId)).thenReturn(Optional.of(room));
        when(roomMapper.toDTO(room)).thenReturn(expectedDTO);
        
        // When
        RoomDTO result = roomService.findRoomById(roomId);
        
        // Then
        assertNotNull(result);
        verify(roomRepository).findById(roomId);
        verify(roomMapper).toDTO(room);
    }
    
    @Test
    void testFindRoomById_NotFound() {
        // Given
        Long roomId = 999L;
        when(roomRepository.findById(roomId)).thenReturn(Optional.empty());
        
        // When & Then
        assertThrows(ResourceNotFoundException.class, 
            () -> roomService.findRoomById(roomId));
    }
}
```

### 2. Integration Tests with TestContainers

```java
@SpringBootTest
@Testcontainers
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class RoomRepositoryIntegrationTest {
    
    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15-alpine")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test");
    
    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    }
    
    @Autowired
    private RoomRepository roomRepository;
    
    @Test
    void testFindAvailableRooms() {
        // Given
        Room room = Room.builder()
            .roomNumber("101")
            .roomType(RoomType.SINGLE)
            .status(RoomStatus.AVAILABLE)
            .pricePerNight(new BigDecimal("100.00"))
            .capacity(2)
            .build();
        roomRepository.save(room);
        
        // When
        List<Room> availableRooms = roomRepository.findAvailableRooms(
            LocalDate.now(),
            LocalDate.now().plusDays(1),
            RoomType.SINGLE,
            RoomStatus.AVAILABLE
        );
        
        // Then
        assertFalse(availableRooms.isEmpty());
        assertEquals("101", availableRooms.get(0).getRoomNumber());
    }
}
```

### 3. Frontend Unit Tests

```typescript
// room.service.spec.ts
describe('RoomService', () => {
  let service: RoomService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RoomService]
    });
    
    service = TestBed.inject(RoomService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  
  afterEach(() => {
    httpMock.verify();
  });
  
  it('should fetch rooms', () => {
    const mockRooms: Room[] = [
      { id: 1, roomNumber: '101', roomType: 'SINGLE', status: 'AVAILABLE' }
    ];
    
    service.loadRooms().subscribe(response => {
      expect(response.content).toEqual(mockRooms);
    });
    
    const req = httpMock.expectOne(`${environment.apiUrl}/rooms?page=0&size=10`);
    expect(req.request.method).toBe('GET');
    req.flush({ content: mockRooms });
  });
});
```

---

## 🚀 Deployment Guide

### 1. Docker Configuration

#### Backend Dockerfile (Multi-Stage Build)

```dockerfile
# Stage 1: Build
FROM maven:3.9.6-eclipse-temurin-17-alpine AS build
WORKDIR /app

# Copy pom.xml and download dependencies (cached layer)
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source and build
COPY src ./src
RUN mvn clean package -DskipTests

# Extract layers
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)

# Stage 2: Runtime
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Create non-root user
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

# Copy layers from build stage
ARG DEPENDENCY=/app/target/dependency
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/actuator/health || exit 1

EXPOSE 8080

ENTRYPOINT ["java", "-cp", "app:app/lib/*", \
            "-Djava.security.egd=file:/dev/./urandom", \
            "-XX:+UseContainerSupport", \
            "-XX:MaxRAMPercentage=75.0", \
            "com.hotellandon.HotelLandonApplication"]
```

#### Frontend Dockerfile

```dockerfile
# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build -- --configuration=production

# Stage 2: Runtime
FROM nginx:alpine
COPY --from=build /app/dist/hotel-landon-frontend/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

#### nginx.conf

```nginx
events {
  worker_connections 1024;
}

http {
  include /etc/nginx/mime.types;
  default_type application/octet-stream;
  
  sendfile on;
  keepalive_timeout 65;
  
  # Gzip compression
  gzip on;
  gzip_vary on;
  gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
  
  server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;
    
    # Angular routing
    location / {
      try_files $uri $uri/ /index.html;
    }
    
    # API proxy
    location /api/ {
      proxy_pass http://backend:8080/api/;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
      expires 1y;
      add_header Cache-Control "public, immutable";
    }
  }
}
```

### 2. Docker Compose

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    container_name: hotel-landon-db
    environment:
      POSTGRES_DB: hotel_landon
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - hotel-network
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5

  backend:
    build:
      context: ./hotel-landon-backend
      dockerfile: Dockerfile
    container_name: hotel-landon-api
    environment:
      SPRING_PROFILES_ACTIVE: prod
      DB_URL: jdbc:postgresql://postgres:5432/hotel_landon
      DB_USERNAME: postgres
      DB_PASSWORD: ${DB_PASSWORD}
      JWT_SECRET: ${JWT_SECRET}
    ports:
      - "8080:8080"
    depends_on:
      postgres:
        condition: service_healthy
    networks:
      - hotel-network
    restart: unless-stopped

  frontend:
    build:
      context: ./hotel-landon-frontend
      dockerfile: Dockerfile
    container_name: hotel-landon-web
    ports:
      - "80:80"
    depends_on:
      - backend
    networks:
      - hotel-network
    restart: unless-stopped

volumes:
  postgres_data:

networks:
  hotel-network:
    driver: bridge
```

### 3. Kubernetes Deployment

```yaml
# backend-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hotel-landon-backend
spec:
  replicas: 3
  selector:
    matchLabels:
      app: hotel-landon-backend
  template:
    metadata:
      labels:
        app: hotel-landon-backend
    spec:
      containers:
      - name: backend
        image: hotel-landon-backend:latest
        ports:
        - containerPort: 8080
        env:
        - name: SPRING_PROFILES_ACTIVE
          value: "prod"
        - name: DB_URL
          valueFrom:
            configMapKeyRef:
              name: hotel-config
              key: db.url
        - name: DB_PASSWORD
          valueFrom:
            secretKeyRef:
              name: hotel-secrets
              key: db.password
        resources:
          requests:
            memory: "512Mi"
            cpu: "250m"
          limits:
            memory: "1Gi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /actuator/health/liveness
            port: 8080
          initialDelaySeconds: 60
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /actuator/health/readiness
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: hotel-landon-backend-service
spec:
  selector:
    app: hotel-landon-backend
  ports:
  - protocol: TCP
    port: 8080
    targetPort: 8080
  type: LoadBalancer
```

### 4. CI/CD Pipeline (GitHub Actions)

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  backend-tests:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    
    - name: Set up JDK 17
      uses: actions/setup-java@v4
      with:
        java-version: '17'
        distribution: 'temurin'
        cache: maven
    
    - name: Run Backend Tests
      run: |
        cd hotel-landon-backend
        mvn clean test
    
    - name: Build Backend
      run: |
        cd hotel-landon-backend
        mvn clean package -DskipTests
    
    - name: Upload Backend Artifact
      uses: actions/upload-artifact@v3
      with:
        name: backend-jar
        path: hotel-landon-backend/target/*.jar

  frontend-tests:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    
    - name: Set up Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
        cache-dependency-path: hotel-landon-frontend/package-lock.json
    
    - name: Install Dependencies
      run: |
        cd hotel-landon-frontend
        npm ci
    
    - name: Run Frontend Tests
      run: |
        cd hotel-landon-frontend
        npm run test -- --watch=false --browsers=ChromeHeadless
    
    - name: Build Frontend
      run: |
        cd hotel-landon-frontend
        npm run build -- --configuration=production
    
    - name: Upload Frontend Artifact
      uses: actions/upload-artifact@v3
      with:
        name: frontend-dist
        path: hotel-landon-frontend/dist

  docker-build-push:
    needs: [backend-tests, frontend-tests]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - uses: actions/checkout@v4
    
    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v3
    
    - name: Login to Docker Hub
      uses: docker/login-action@v3
      with:
        username: ${{ secrets.DOCKER_USERNAME }}
        password: ${{ secrets.DOCKER_PASSWORD }}
    
    - name: Build and Push Backend
      uses: docker/build-push-action@v5
      with:
        context: ./hotel-landon-backend
        push: true
        tags: |
          ${{ secrets.DOCKER_USERNAME }}/hotel-landon-backend:latest
          ${{ secrets.DOCKER_USERNAME }}/hotel-landon-backend:${{ github.sha }}
        cache-from: type=registry,ref=${{ secrets.DOCKER_USERNAME }}/hotel-landon-backend:buildcache
        cache-to: type=registry,ref=${{ secrets.DOCKER_USERNAME }}/hotel-landon-backend:buildcache,mode=max
    
    - name: Build and Push Frontend
      uses: docker/build-push-action@v5
      with:
        context: ./hotel-landon-frontend
        push: true
        tags: |
          ${{ secrets.DOCKER_USERNAME }}/hotel-landon-frontend:latest
          ${{ secrets.DOCKER_USERNAME }}/hotel-landon-frontend:${{ github.sha }}

  deploy:
    needs: docker-build-push
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - name: Deploy to Production
      run: |
        echo "Deploying to production server..."
        # Add your deployment commands here
```

---

## 🔄 Microservices Migration Path

### Architecture Evolution

```
Monolith → Modular Monolith → Microservices

Phase 1: Modular Monolith
├── Room Service Module
├── Reservation Service Module
├── Guest Service Module
└── Shared Module

Phase 2: Extract Services
├── Room Service (Port 8081)
├── Reservation Service (Port 8082)
├── Guest Service (Port 8083)
├── API Gateway (Port 8080)
└── Service Discovery (Eureka)
```

### 1. Service Registry (Eureka)

```java
// eureka-server/pom.xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>

// EurekaServerApplication.java
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}

// application.yml
server:
  port: 8761

eureka:
  client:
    register-with-eureka: false
    fetch-registry: false
  server:
    enable-self-preservation: false
```

### 2. API Gateway (Spring Cloud Gateway)

```java
// API Gateway Configuration
@Configuration
public class GatewayConfig {
    
    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("room-service", r -> r
                .path("/api/v1/rooms/**")
                .filters(f -> f
                    .circuitBreaker(config -> config
                        .setName("roomServiceCircuitBreaker")
                        .setFallbackUri("forward:/fallback/rooms"))
                    .retry(config -> config.setRetries(3)))
                .uri("lb://ROOM-SERVICE"))
            
            .route("reservation-service", r -> r
                .path("/api/v1/reservations/**")
                .filters(f -> f
                    .circuitBreaker(config -> config
                        .setName("reservationServiceCircuitBreaker")
                        .setFallbackUri("forward:/fallback/reservations")))
                .uri("lb://RESERVATION-SERVICE"))
            
            .route("guest-service", r -> r
                .path("/api/v1/guests/**")
                .uri("lb://GUEST-SERVICE"))
            
            .build();
    }
}

// Rate Limiting
@Bean
public RedisRateLimiter redisRateLimiter() {
    return new RedisRateLimiter(10, 20); // 10 requests per second, burst of 20
}
```

### 3. Distributed Tracing (Sleuth + Zipkin)

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-sleuth</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-sleuth-zipkin</artifactId>
</dependency>
```

```yaml
spring:
  sleuth:
    sampler:
      probability: 1.0
  zipkin:
    base-url: http://localhost:9411
```

### 4. Message Queue Integration (RabbitMQ)

```java
@Configuration
public class RabbitMQConfig {
    
    public static final String RESERVATION_QUEUE = "reservation.queue";
    public static final String RESERVATION_EXCHANGE = "reservation.exchange";
    public static final String RESERVATION_ROUTING_KEY = "reservation.created";
    
    @Bean
    public Queue reservationQueue() {
        return new Queue(RESERVATION_QUEUE, true);
    }
    
    @Bean
    public TopicExchange reservationExchange() {
        return new TopicExchange(RESERVATION_EXCHANGE);
    }
    
    @Bean
    public Binding binding(Queue queue, TopicExchange exchange) {
        return BindingBuilder.bind(queue)
            .to(exchange)
            .with(RESERVATION_ROUTING_KEY);
    }
}

// Publisher
@Service
@RequiredArgsConstructor
public class ReservationPublisher {
    
    private final RabbitTemplate rabbitTemplate;
    
    public void publishReservationCreated(ReservationDTO reservation) {
        rabbitTemplate.convertAndSend(
            RabbitMQConfig.RESERVATION_EXCHANGE,
            RabbitMQConfig.RESERVATION_ROUTING_KEY,
            reservation
        );
    }
}

// Consumer
@Component
@Slf4j
public class ReservationConsumer {
    
    @RabbitListener(queues = RabbitMQConfig.RESERVATION_QUEUE)
    public void handleReservationCreated(ReservationDTO reservation) {
        log.info("Received reservation: {}", reservation);
        // Send email, update availability, etc.
    }
}
```

### 5. Resilience Patterns (Resilience4j)

```java
@Service
@RequiredArgsConstructor
public class ReservationService {
    
    private final RestTemplate restTemplate;
    
    @CircuitBreaker(name = "roomService", fallbackMethod = "fallbackGetRoom")
    @Retry(name = "roomService")
    @RateLimiter(name = "roomService")
    public Room getRoomDetails(Long roomId) {
        return restTemplate.getForObject(
            "http://room-service/api/v1/rooms/" + roomId,
            Room.class
        );
    }
    
    private Room fallbackGetRoom(Long roomId, Exception ex) {
        log.error("Fallback triggered for room: {}", roomId, ex);
        return Room.builder()
            .id(roomId)
            .roomNumber("UNAVAILABLE")
            .build();
    }
}
```

```yaml
resilience4j:
  circuitbreaker:
    instances:
      roomService:
        register-health-indicator: true
        sliding-window-size: 10
        minimum-number-of-calls: 5
        permitted-number-of-calls-in-half-open-state: 3
        automatic-transition-from-open-to-half-open-enabled: true
        wait-duration-in-open-state: 5s
        failure-rate-threshold: 50
        event-consumer-buffer-size: 10
  
  retry:
    instances:
      roomService:
        max-attempts: 3
        wait-duration: 1s
        enable-exponential-backoff: true
        exponential-backoff-multiplier: 2
  
  ratelimiter:
    instances:
      roomService:
        limit-for-period: 10
        limit-refresh-period: 1s
        timeout-duration: 0
```

---

## 📊 Monitoring & Observability

### 1. Spring Boot Actuator

```yaml
management:
  endpoints:
    web:
      exposure:
        include: '*'
  endpoint:
    health:
      show-details: always
      probes:
        enabled: true
  metrics:
    export:
      prometheus:
        enabled: true
  tracing:
    sampling:
      probability: 1.0
```

### 2. Custom Health Indicators

```java
@Component
public class DatabaseHealthIndicator implements HealthIndicator {
    
    @Autowired
    private DataSource dataSource;
    
    @Override
    public Health health() {
        try (Connection connection = dataSource.getConnection()) {
            if (connection.isValid(1)) {
                return Health.up()
                    .withDetail("database", "PostgreSQL")
                    .withDetail("status", "Connected")
                    .build();
            }
        } catch (Exception ex) {
            return Health.down()
                .withDetail("error", ex.getMessage())
                .build();
        }
        return Health.down().build();
    }
}
```

### 3. Custom Metrics

```java
@Service
@RequiredArgsConstructor
public class MetricsService {
    
    private final MeterRegistry meterRegistry;
    
    public void recordReservation(String roomType) {
        Counter counter = Counter.builder("reservations.created")
            .tag("room.type", roomType)
            .description("Total reservations created")
            .register(meterRegistry);
        counter.increment();
    }
    
    public void recordReservationDuration(Duration duration) {
        Timer timer = Timer.builder("reservation.duration")
            .description("Time taken to create reservation")
            .register(meterRegistry);
        timer.record(duration);
    }
}
```

### 4. Prometheus & Grafana Setup

```yaml
# docker-compose.monitoring.yml
version: '3.8'

services:
  prometheus:
    image: prom/prometheus:latest
    container_name: prometheus
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    ports:
      - "9090:9090"
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'
    networks:
      - monitoring

  grafana:
    image: grafana/grafana:latest
    container_name: grafana
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
    volumes:
      - grafana_data:/var/lib/grafana
    networks:
      - monitoring

volumes:
  prometheus_data:
  grafana_data:

networks:
  monitoring:
    driver: bridge
```

```yaml
# prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'spring-boot-app'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['backend:8080']
```

---

## 🔐 Advanced Security Features

### 1. OAuth2 Integration

```java
@Configuration
@EnableWebSecurity
public class OAuth2SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .oauth2Login(oauth2 -> oauth2
                .loginPage("/login")
                .defaultSuccessUrl("/dashboard")
                .failureUrl("/login?error=true")
                .userInfoEndpoint(userInfo -> userInfo
                    .userService(customOAuth2UserService())
                )
            )
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(jwt -> jwt
                    .jwtAuthenticationConverter(jwtAuthenticationConverter())
                )
            );
        
        return http.build();
    }
    
    @Bean
    public JwtAuthenticationConverter jwtAuthenticationConverter() {
        JwtGrantedAuthoritiesConverter grantedAuthoritiesConverter = 
            new JwtGrantedAuthoritiesConverter();
        grantedAuthoritiesConverter.setAuthorityPrefix("ROLE_");
        
        JwtAuthenticationConverter jwtAuthenticationConverter = 
            new JwtAuthenticationConverter();
        jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(
            grantedAuthoritiesConverter);
        
        return jwtAuthenticationConverter;
    }
}
```

### 2. Method-Level Security

```java
@Service
@PreAuthorize("hasRole('ADMIN')")
public class AdminService {
    
    @PreAuthorize("hasAuthority('ROOM:WRITE')")
    public Room createRoom(RoomDTO roomDTO) {
        // Implementation
    }
    
    @PreAuthorize("hasAuthority('ROOM:DELETE') and #roomId == authentication.principal.ownedRoomId")
    public void deleteRoom(Long roomId) {
        // Implementation
    }
    
    @PostAuthorize("returnObject.createdBy == authentication.name")
    public Room getRoomDetails(Long roomId) {
        // Implementation
    }
}
```

### 3. API Rate Limiting

```java
@Configuration
public class RateLimitConfig {
    
    @Bean
    public Bucket createBucket() {
        Bandwidth limit = Bandwidth.classic(100, Refill.greedy(100, Duration.ofMinutes(1)));
        return Bucket.builder()
            .addLimit(limit)
            .build();
    }
}

@Component
@Slf4j
public class RateLimitingFilter extends OncePerRequestFilter {
    
    private final Map<String, Bucket> cache = new ConcurrentHashMap<>();
    
    @Override
    protected void doFilterInternal(HttpServletRequest request, 
                                   HttpServletResponse response, 
                                   FilterChain filterChain) throws ServletException, IOException {
        
        String clientId = getClientId(request);
        Bucket bucket = cache.computeIfAbsent(clientId, k -> createBucket());
        
        if (bucket.tryConsume(1)) {
            filterChain.doFilter(request, response);
        } else {
            response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
            response.getWriter().write("Too many requests");
        }
    }
    
    private String getClientId(HttpServletRequest request) {
        return request.getRemoteAddr();
    }
    
    private Bucket createBucket() {
        Bandwidth limit = Bandwidth.classic(100, Refill.greedy(100, Duration.ofMinutes(1)));
        return Bucket.builder().addLimit(limit).build();
    }
}
```

---

## 📚 Additional Advanced Topics

### 1. Soft Delete Pattern

```java
@Entity
@SQLDelete(sql = "UPDATE rooms SET deleted = true WHERE id = ?")
@Where(clause = "deleted = false")
@Getter
@Setter
public class Room extends BaseEntity {
    
    @Column(name = "deleted")
    private boolean deleted = false;
    
    // Other fields...
}

// Service method
public void softDeleteRoom(Long id) {
    Room room = roomRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Room not found"));
    room.setDeleted(true);
    roomRepository.save(room);
}
```

### 2. Audit Logging

```java
@Entity
@Table(name = "audit_logs")
@Getter
@Setter
public class AuditLog {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String entityName;
    private Long entityId;
    private String action;
    private String username;
    private LocalDateTime timestamp;
    
    @Column(columnDefinition = "TEXT")
    private String oldValue;
    
    @Column(columnDefinition = "TEXT")
    private String newValue;
}

@Aspect
@Component
@Slf4j
public class AuditAspect {
    
    @Autowired
    private AuditLogRepository auditLogRepository;
    
    @AfterReturning(pointcut = "@annotation(audited)", returning = "result")
    public void logAudit(JoinPoint joinPoint, Audited audited, Object result) {
        AuditLog auditLog = new AuditLog();
        auditLog.setEntityName(audited.entityName());
        auditLog.setAction(audited.action());
        auditLog.setUsername(SecurityContextHolder.getContext()
            .getAuthentication().getName());
        auditLog.setTimestamp(LocalDateTime.now());
        
        auditLogRepository.save(auditLog);
        log.info("Audit log created: {}", auditLog);
    }
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Audited {
    String entityName();
    String action();
}
```

### 3. Database Sharding Strategy

```java
@Configuration
public class ShardingConfig {
    
    @Bean
    public DataSource shardingDataSource() throws SQLException {
        ShardingRuleConfiguration shardingRuleConfig = new ShardingRuleConfiguration();
        
        // Table rule configuration
        shardingRuleConfig.getTableRuleConfigs().add(
            getReservationTableRuleConfiguration()
        );
        
        // Data source configuration
        Map<String, DataSource> dataSourceMap = new HashMap<>();
        dataSourceMap.put("ds0", createDataSource("db0"));
        dataSourceMap.put("ds1", createDataSource("db1"));
        
        return ShardingDataSourceFactory.createDataSource(
            dataSourceMap, shardingRuleConfig, new Properties()
        );
    }
    
    private TableRuleConfiguration getReservationTableRuleConfiguration() {
        TableRuleConfiguration config = new TableRuleConfiguration(
            "reservations", 
            "ds${0..1}.reservations_${0..1}"
        );
        
        // Database sharding strategy
        config.setDatabaseShardingStrategyConfig(
            new InlineShardingStrategyConfiguration(
                "guest_id", 
                "ds${guest_id % 2}"
            )
        );
        
        // Table sharding strategy
        config.setTableShardingStrategyConfig(
            new InlineShardingStrategyConfiguration(
                "id", 
                "reservations_${id % 2}"
            )
        );
        
        return config;
    }
}
```

---

## 🎓 Best Practices Summary

### Backend Best Practices

1. **Layered Architecture**: Maintain clear separation between Controller, Service, and Repository layers
2. **DTO Pattern**: Never expose entities directly through REST APIs
3. **Exception Handling**: Centralized exception handling with meaningful error messages
4. **Validation**: Use Bean Validation annotations and custom validators
5. **Transaction Management**: Use `@Transactional` appropriately with proper isolation levels
6. **Query Optimization**: Avoid N+1 queries, use fetch joins and pagination
7. **Security**: Implement JWT authentication, role-based access control, and input sanitization
8. **Testing**: Write unit tests, integration tests, and use TestContainers for database tests
9. **Documentation**: Use OpenAPI/Swagger for API documentation
10. **Monitoring**: Enable Actuator endpoints and integrate with monitoring tools

### Frontend Best Practices

1. **Standalone Components**: Use Angular standalone components for better tree-shaking
2. **Signals**: Leverage Angular Signals for fine-grained reactivity
3. **Lazy Loading**: Implement lazy loading for feature modules
4. **Change Detection**: Use OnPush strategy where possible
5. **Reactive Forms**: Prefer reactive forms over template-driven forms
6. **Type Safety**: Use interfaces and types for all data structures
7. **Error Handling**: Implement global error handling with interceptors
8. **State Management**: Use services with Signals for state management
9. **Performance**: Use trackBy, virtual scrolling, and optimize bundle size
10. **Testing**: Write unit tests with Jasmine/Karma and E2E tests

---

## 🚀 Quick Start Commands

### Backend Setup

```bash
# Clone repository
git clone https://github.com/yourusername/hotel-landon.git
cd hotel-landon/backend

# Build project
mvn clean install

# Run application
mvn spring-boot:run

# Run with specific profile
mvn spring-boot:run -Dspring-boot.run.profiles=dev

# Run tests
mvn test

# Build Docker image
docker build -t hotel-landon-backend:latest .

# Run with Docker Compose
docker-compose up -d
```

### Frontend Setup

```bash
# Navigate to frontend
cd hotel-landon/frontend

# Install dependencies
npm install

# Run development server
ng serve

# Build for production
ng build --configuration=production

# Run tests
npm test

# Run E2E tests
npm run e2e

# Build Docker image
docker build -t hotel-landon-frontend:latest .
```

### Database Setup

```bash
# Create database
createdb hotel_landon

# Run migrations
mvn flyway:migrate

# Seed data
mvn flyway:migrate -Dflyway.locations=filesystem:src/main/resources/db/seed
```

---

## 📖 API Documentation

Once the application is running, access the API documentation at:

- **Swagger UI**: http://localhost:8080/swagger-ui.html
- **OpenAPI JSON**: http://localhost:8080/v3/api-docs

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👥 Authors

- **Your Name** - Hardik Hariyani@20205

---

## 🙏 Acknowledgments

- Spring Boot Team for the amazing framework
- Angular Team for the modern frontend framework
- Community contributors and open-source libraries

---

## 📞 Support

join our Slack channel.

---

## 🔗 Useful Links

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Angular Documentation](https://angular.io/docs)
- [Docker Documentation](https://docs.docker.com/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

**Built with ❤️ using Spring Boot & Angular**"
            [class.border-red-500]="isFieldInvalid('roomNumber')">
          @if (isFieldInvalid('roomNumber')) {
            <p class="text-red-500 text-sm mt-1">
              {{ getErrorMessage('roomNumber') }}
            </p>
          }
        </div>
        
        <!-- Room Type -->
        <div class="mb-6">
          <label class="block text-gray-700 font-semibold mb-2">
            Room Type *
          </label>
          <select
            formControlName="roomType"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            [class.border-red-500]="isFieldInvalid('roomType')">
            <option value="">Select room type</option>
            <option value="SINGLE">Single</option>
            <option value="DOUBLE">Double</option>
            <option value="SUITE">Suite</option>
            <option value="DELUXE">Deluxe</option>
          </select>
          @if (isFieldInvalid('roomType')) {
            <p class="text-red-500 text-sm mt-1">Room type is required</p>
          }
        </div>
        
        <!-- Price Per Night -->
        <div class="mb-6">
          <label class="block text-gray-700 font-semibold mb-2">
            Price Per Night *
          </label>
          <input
            type="number"
            formControlName="pricePerNight"
            step="0.01"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500
