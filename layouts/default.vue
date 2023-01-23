<template>
    <a-layout :style="{ height: '100vh' }">
      <a-layout-sider width="280" style="background: #2C55B5">
        <div>
          <h3>
            My Organization
          </h3>
          <a-menu mode="inline">
            <a-menu-item key="1">
              <span>People</span>
            </a-menu-item>
          </a-menu>
        </div>
      </a-layout-sider>
      <a-layout style="padding: 24px 24px 24px">
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '500px'}"
        >
          <slot />
        </a-layout-content>
      </a-layout>
    </a-layout>
</template>