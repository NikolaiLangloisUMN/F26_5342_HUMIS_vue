import { createRouter, createWebHistory } from 'vue-router'

import HumisHomepage from "@/views/HumisHomepage.vue";
import AboutUs from '@/views/AboutUs.vue'
import ContactUs from "@/views/ContactUs.vue";
import FacultyAndStaffLandingPage from "@/views/faculty-and-staff/FacultyAndStaffLandingPage.vue";
import FacultyListing from "@/views/faculty-and-staff/FacultyListing.vue";
import StaffListing from "@/views/faculty-and-staff/StaffListing.vue";
import NewFaculty from "@/views/faculty-and-staff/NewFaculty.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HumisHomepage,
      meta: {
        prettyName: 'Home page',
        hideMe: true,
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs,
      meta: {
        prettyName: 'About Us',
      }
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs,
      meta: {
        prettyName: 'Contact Us',
      }
    },
    {
      path: '/faculty-and-staff',
      name: 'faculty-and-staff',
      component: FacultyAndStaffLandingPage,
      /* These are this pages's (route's) child routes (or pages) */
      children: [
        {
          path: 'new-faculty',
          name: 'new-faculty',
          component: NewFaculty,
        },
        {
          path: 'faculty-listing',
          name: 'faculty-listing',
          component: FacultyListing,
        },
        {
          path: 'staff-listing',
          name: 'staff-listing',
          component: StaffListing,
        }
      ],
      meta: {
        prettyName: 'Faculty and Staff',
      }
    }
  ],
})

export default router
