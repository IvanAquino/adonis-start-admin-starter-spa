<template>
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
            <li class="nav-item nav-profile">
                <div class="nav-link">
                    <div class="profile-image"> <img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/user-male-icon.png" alt="image"> <span class="online-status online"></span> </div>
                    <div class="profile-name">
                        <p class="name">{{ user.name }}</p>
                        <!-- <p class="designation">Manager</p> -->
                        <div class="badge badge-teal mx-auto mt-3">Online</div>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'dashboard-home'}">
                    <img class="menu-icon" :src="`${url}/images/menu_icons/01.png`" alt="menu icon">
                    <span class="menu-title">Dashboard</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'dashboard-contacts'}">
                    <img class="menu-icon" :src="`${url}/images/menu_icons/02.png`" alt="menu icon">
                    <span class="menu-title">Contacts</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'dashboard-home'}">
                    <img class="menu-icon" :src="`${url}/images/menu_icons/03.png`" alt="menu icon">
                    <span class="menu-title">Link</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'dashboard-home'}">
                    <img class="menu-icon" :src="`${url}/images/menu_icons/04.png`" alt="menu icon">
                    <span class="menu-title">Link</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'dashboard-home'}">
                    <img class="menu-icon" :src="`${url}/images/menu_icons/05.png`" alt="menu icon">
                    <span class="menu-title">Link</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'dashboard-home'}">
                    <img class="menu-icon" :src="`${url}/images/menu_icons/06.png`" alt="menu icon">
                    <span class="menu-title">Link</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'dashboard-home'}">
                    <img class="menu-icon" :src="`${url}/images/menu_icons/07.png`" alt="menu icon">
                    <span class="menu-title">Link</span>
                </router-link>
            </li>

            <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
                    <img class="menu-icon" :src="`${url}/images/menu_icons/08.png`" alt="menu icon"> <span class="menu-title">Dropdown</span><i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="general-pages">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item"> <router-link class="nav-link" :to="{name: 'dashboard-home'}">Link</router-link> </li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        data: () => ({
            url: ''
        }),
        
        computed: {
            ...mapState(['user'])
        },
        
        mounted () {
            this.url = document.head.querySelector("[name=baseUrl]").content
        }
    }
</script>