<template>
  <nav class="compact-sidebar">
    <div class="nav-content">
      <!-- Profile -->
      <div class="profile-section">
        <div class="profile-avatar">
          <img src="@/assets/me.png" alt="Profile" class="avatar-img" />
        </div>
        <p class="profile-name">Alex</p>
      </div>

      <!-- Navigation Links -->
      <div class="nav-links">
        <a href="https://github.com/AlexGit123" class="nav-item" title="GitHub">
          <img class="icon" src="@/assets/github1.svg" alt="GitHub" />
        </a>

        <a
          href="https://www.linkedin.com/in/alex-doerfer-a004611b7/"
          class="nav-item"
          title="LinkedIn"
        >
          <img class="icon" src="@/assets/linkedin.svg" alt="LinkedIn" />
        </a>

        <a href="#" class="nav-item" title="Download CV">
          <img class="icon" src="@/assets/download.svg" alt="CV" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {}
}
</script>

<style scoped>
.compact-sidebar {
  width: 80px;
  background-color: rgba(31, 33, 34, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1rem 0.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: -4px 8px 32px rgba(0, 0, 0, 0.25);
}

.nav-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.profile-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.avatar-img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-name {
  color: #e5e7eb;
  font-size: 0.75rem;
  font-weight: 500;
  margin: 0;
  text-align: center;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  text-decoration: none;
  color: #9ca3af;
  background-color: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(82, 129, 211, 0.15);
}

.icon {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease;
  filter: brightness(0.8);
}

.nav-item:hover .icon {
  filter: brightness(1);
  transform: scale(1.1);
}

.compact-sidebar {
  animation: slideInFromRight 0.3s ease-out;
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .compact-sidebar {
    width: 60px;
    padding: 0.75rem 0.25rem;
    /* Adjusted shadow for mobile */
    box-shadow: -2px 4px 16px rgba(0, 0, 0, 0.2);
  }

  .profile-avatar,
  .nav-item {
    width: 40px;
    height: 40px;
  }

  .avatar-img {
    width: 36px;
    height: 36px;
  }

  .icon {
    width: 20px;
    height: 20px;
  }

  .profile-name {
    font-size: 0.7rem;
  }
}

.compact-sidebar:hover {
  transform: scale(1.02);
  transition: transform 0.2s ease;
}
</style>
