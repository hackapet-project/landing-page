// This is a simple i18n implementation that can be expanded later
// For a more robust solution, consider using next-intl or next-i18next
"use client";

import { useState, useEffect, createContext, useContext } from 'react';

export type Locale = 'en' | 'es' | 'val';

export const defaultLocale: Locale = 'es';

export const locales: Locale[] = ['en', 'es', 'val'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  val: 'Valencià',
};

// Simple dictionary type for translations
export type Dictionary = {
  [key: string]: string | Dictionary;
};

// Sample dictionaries - in a real app, these would be in separate files
export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    common: {
      home: 'Home',
      aboutUs: 'About Us',
      aboutHackapet: 'About Hackapet',
      collaborate: 'Collaborate',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      returnHome: 'Return to Home',
    },
    header: {
      openMenu: 'Open main menu',
      closeMenu: 'Close menu',
    },
    footer: {
      description: 'Open-source digital tools to optimize shelter management and boost adoptions.',
      quickLinks: 'Quick Links',
      ourProducts: 'Our Products',
      stayUpdated: 'Stay Updated',
      newsletterDescription: 'Subscribe to our newsletter for the latest updates on our projects and events.',
      emailPlaceholder: 'Your email',
      subscribe: 'Subscribe',
      copyright: 'GPL work by Hackapet. Made with',
      forAnimals: 'for animals.',
    },
    navigation: {
      home: 'Home',
      pets: 'Pets',
      expenses: 'Expenses',
      settings: 'Settings',
    },
    home: {
      hero: {
        title: 'Software for Animal Shelters',
        description: 'Open-source digital tools to optimize shelter management and boost adoptions.',
        cta: 'Learn More',
        imageAlt: 'Hackapet App Screenshot',
      },
      offers: {
        title: 'What Hackapet Offers',
        description: 'Hackapet provides a comprehensive set of solutions designed to improve the daily operations of animal shelters and streamline adoption processes.',
        feature1: 'Management system for efficient handling of records and data',
        feature2: 'Online platform connecting pets with potential adopters',
        feature3: 'Post-adoption tracking tools, ensuring animal welfare',
        feature4: 'Mobile interface for easy and quick access from anywhere',
        feature5: 'Open-source and free, available for customization by any shelter',
        imageAlt: 'Pet management system',
      },
      altruistic: {
        title: 'An Altruistic Project',
        subtitle: 'for Animal Welfare',
        description: 'Hackapet, developed in collaboration with shelters in Torrente and Valencia, is a non-profit initiative focused on improving the lives of animals in shelters and facilitating the work of caregivers.',
        point1: 'Created altruistically by volunteers passionate about technology and animal welfare',
        point2: 'Developed in close cooperation with local shelters to address their specific needs',
        point3: 'Free and open-source, allowing for free use and adaptation',
        point4: 'Focused on efficiency, freeing up time for direct animal care',
        point5: 'Continuously evolving thanks to suggestions from shelters and the community',
        cta: 'Learn More',
        imageAlt: 'Animal welfare',
      },
      impact: {
        title: 'Real Impact on the Community',
        description: 'Hackapet was born with the purpose of transforming the lives of animals in shelters, working closely with the shelters in Torrente and Valencia.',
        feature1: {
          title: 'Community-Driven',
          description: 'Developed with and for the animal protection community, without commercial purposes.',
        },
        feature2: {
          title: 'Locally Customized',
          description: 'Customized to meet the specific needs of shelters in Torrente and Valencia.',
        },
        feature3: {
          title: 'Adoption Enhancement',
          description: 'Enhances adoption by effectively connecting pets with potential adopters.',
        },
        feature4: {
          title: 'Administrative Relief',
          description: 'Minimizes administrative burden, allowing greater focus on animal care.',
        },
        cta: 'Join Our Cause',
      },
      collaborations: {
        title: 'Collaborations and Support',
        description: 'Hackapet is developed thanks to the collaboration with ADAT - Animal Defense Association of Torrent and SOS Peludetes from Torrente and the support of Hackerspace Valencia, which provides us with the space, tools, and other resources necessary to fulfill our mission.',
        partner1: 'Animal Defense Association of Torrent',
        partner2: 'Animal Shelter from Torrente',
        partner3: 'Providing space and resources',
        footer: 'Driven by and for the animal protection community, non-profit. Adapted to the particular needs of local shelters. Thanks to the local shelters that have helped us for their valuable time and effort they have given us to start developing these platforms.',
      },
      cta: {
        title: 'Ready to make a difference?',
        description: 'Join our community of developers, designers, and animal lovers working together to improve animal welfare through technology.',
        primary: 'Collaborate with Us',
        secondary: 'View on GitHub',
      },
    },
    about: {
      hero: {
        title: 'About Us',
        description: 'The team behind Hackapet is dedicated to improving animal welfare through technology.',
      },
      tabs: {
        team: 'The Team',
        mission: 'Mission & Values',
        impact: 'Our Impact',
      },
      team: {
        title: 'The Team',
        description: 'Developers, managers, designers and volunteers committed to improving the lives of animals in shelters, optimizing adoption and management processes through technological solutions, while growing as a community.',
      },
      mission: {
        title: 'Our Mission',
        content: 'At Hackapet, our mission is to leverage technology to improve the lives of animals in shelters. We develop open-source software solutions that streamline shelter operations, increase adoption rates, and ensure the well-being of animals both during their stay at shelters and after adoption.',
        imageAlt: 'Our mission',
      },
      values: {
        title: 'Our Values',
        content: 'We believe in the power of technology to make a positive impact on animal welfare. Our core values include compassion for all living beings, collaboration with shelters and the tech community, innovation in solving real-world problems, and accessibility by keeping our solutions free and open-source.',
        imageAlt: 'Our values',
      },
      story: {
        title: 'Our Story',
        content: 'Hackapet began when a group of tech professionals and animal lovers recognized the challenges faced by local animal shelters in Valencia. What started as a weekend hackathon project has grown into a dedicated community of volunteers working to create sustainable technological solutions for animal welfare organizations.',
      },
      impact: {
        title: 'Our Impact',
        description: 'Since our inception, we\'ve been making a real difference in the lives of animals and the shelters that care for them.',
        stat1: {
          title: 'Shelters Supported',
          description: 'Animal shelters across Valencia region using our software solutions.',
        },
        stat2: {
          title: 'Successful Adoptions',
          description: 'Animals that found forever homes through our adoption platform.',
        },
        stat3: {
          title: 'Time Saved',
          description: 'Average reduction in administrative work for shelter staff.',
        },
        stat4: {
          title: 'Volunteer Developers',
          description: 'Tech professionals contributing their skills to our mission.',
        },
        stat5: {
          title: 'Software Solutions',
          description: 'Comprehensive tools developed for different aspects of shelter management.',
        },
        stat6: {
          title: 'Open Source',
          description: 'All our code is freely available for anyone to use, modify, and improve.',
        },
      },
    },
    aboutHackapet: {
      hero: {
        title: 'What is Hackapet?',
        description: 'A non-profit initiative developing open-source software to optimize animal shelter management and facilitate adoptions in Spain.',
      },
      tabs: {
        mission: 'Mission',
        vision: 'Vision',
        values: 'Values',
        roadmap: 'Roadmap',
      },
      mission: {
        title: 'Our Mission',
        description: 'We develop open-source technological solutions to revolutionize animal shelter management and the adoption process in Spain.',
        communities: 'We connect three essential communities:',
        community1: 'Animal shelters that need effective digital tools',
        community2: 'Emerging developers seeking practical experience',
        community3: 'Technology professionals committed to social causes',
        imageAlt: 'Our mission',
      },
      valueProposition: {
        title: 'Value Proposition',
        point1: 'Free and open-source software adapted to the specific needs of animal shelters',
        point2: 'Comprehensive platform including shelter management (PetSync), adoptions (PetMatch), and post-adoption tracking (AdopTrack)',
        point3: 'Collaborative development that benefits shelters, developers, and the tech community',
        imageAlt: 'Value proposition',
      },
      vision: {
        title: 'Our Vision',
        description: 'To be the leading technological platform transforming animal shelter management and the adoption process in Spain.',
        shortTerm: 'Short-term Goals',
        shortTermGoal: 'Implement PetSync in pilot shelters in Valencia',
        mediumTerm: 'Medium-term Goals',
        mediumTermGoal: 'Expand software adoption throughout Spain',
        longTerm: 'Long-term Goals',
        longTermGoal: 'Become an international reference in software for animal shelters',
        imageAlt: 'Our vision',
      },
      coreValues: {
        title: 'Our Core Values',
        description: 'The principles that guide our work and define our community.',
        value1: {
          title: 'Commitment to Animal Welfare',
          description: 'Everything we do is focused on improving the lives of animals in shelters and finding them loving homes.',
        },
        value2: {
          title: 'Collaboration and Teamwork',
          description: 'We believe in the power of community and working together to achieve our goals.',
        },
        value3: {
          title: 'Transparency and Open Source',
          description: 'Our code and processes are open for all to see, use, and improve upon.',
        },
        value4: {
          title: 'Continuous Innovation',
          description: 'We constantly seek new and better ways to solve problems and improve our solutions.',
        },
        value5: {
          title: 'Positive Social Impact',
          description: 'We measure our success by the positive change we create in the world.',
        },
        value6: {
          title: 'Community-Driven',
          description: 'We are built by and for the community, with decisions guided by those we serve.',
        },
      },
      roadmap: {
        title: 'Our Product Roadmap',
        description: 'The comprehensive suite of tools we\'re developing to transform animal shelter management.',
        petSync: {
          title: 'PetSync',
          description: 'Comprehensive management system for animal shelters',
          feature1: 'Animal management (medical records, behavior, feeding)',
          feature2: 'Social media automation for outreach',
          feature3: 'Adoption management from the shelter side',
          feature4: 'Currently in development for web, iOS, and Android',
          imageAlt: 'PetSync',
        },
        petMatch: {
          title: 'PetMatch',
          description: 'Federated platform for finding pets',
          feature1: 'Search for animals across different shelters',
          feature2: 'Filters by breed, coat type, size, etc.',
          feature3: 'Simplified adoption system for end users',
          imageAlt: 'PetMatch',
        },
        adopTrack: {
          title: 'AdopTrack',
          description: 'Post-adoption tracking system',
          feature1: 'Monitor the pet\'s progress in its new home',
          feature2: 'Track animal behavior and adaptation',
          feature3: 'Support for new pet owners',
          imageAlt: 'AdopTrack',
        },
      },
    },
    collaborate: {
      hero: {
        title: 'How to Collaborate with Hackapet',
        description: 'Join our mission to improve animal welfare through technology. There are many ways you can contribute.',
      },
      ways: {
        title: 'Ways to Collaborate',
        description: 'Hackapet is an open and collaborative project that depends on the participation of people passionate about animal welfare and technology.',
      },
      tabs: {
        skills: 'Contribute',
        spread: 'Broadcast',
        join: 'Join',
      },
      skills: {
        developer: {
          title: 'Developer',
          description: 'Help improve our open-source platform by creating new features, fixing bugs, or enhancing the user experience.',
          action: 'Contribute on GitHub',
        },
        designer: {
          title: 'Designer',
          description: 'Contribute with graphic designs, UX/UI, or promotional materials to help communicate our mission more effectively.',
          action: 'Share Your Designs',
        },
        manager: {
          title: 'Project Manager',
          description: 'Coordinate efforts, organize tasks, and ensure the team is aligned with our objectives.',
          action: 'Get Involved',
        },
        communicator: {
          title: 'Communicator',
          description: 'Help spread the word about Hackapet through social media, blogs, or direct contact with shelters and rescues.',
          action: 'Start Sharing',
        },
        shelter: {
          title: 'Shelter Collaboration',
          description: 'If you work at an animal shelter, consider integrating Hackapet into your operations and provide valuable feedback.',
          action: 'Partner With Us',
        },
        contributor: {
          title: 'Open Source Contributor',
          description: 'Contribute to our codebase, documentation, or translations to make our tools more accessible.',
          action: 'View Projects',
        },
      },
      spread: {
        title: 'Spread Our Mission',
        description: 'Another important way to collaborate is by helping to spread our mission. The more people know about Hackapet, the more we can grow and help more shelters.',
        social: {
          title: 'Social Media',
          description: 'Share our posts, invite your friends to follow us, and talk about us on your networks.',
        },
        events: {
          title: 'Events',
          description: 'Organize or participate in local events to talk about Hackapet and our initiatives.',
        },
        blogs: {
          title: 'Blogs and Media',
          description: 'If you have a blog or access to media outlets, publish an article about our project.',
        },
        cta: 'Get Our Media Kit',
        imageAlt: 'Spread the word',
      },
      join: {
        title: 'Join Our Team',
        description: 'If you\'re interested in a more formal commitment, consider joining the Hackapet team as a regular volunteer. We are always looking for people passionate about our mission.',
        openings: 'Current Openings',
        position1: {
          title: 'Mobile Developer (iOS/Android)',
          description: 'Help us develop and maintain our mobile applications for shelter management.',
        },
        position2: {
          title: 'UX Researcher',
          description: 'Conduct user research with shelters to improve our product experience.',
        },
        position3: {
          title: 'Content Creator',
          description: 'Create engaging content about animal welfare and our technological solutions.',
        },
        cta: 'Apply to Join',
        imageAlt: 'Join our team',
      },
      contact: {
        title: 'Contact Us',
        description: 'Interested in collaborating? We would love to hear from you! Email us directly at woof@hackapet.org.',
        form: {
          title: 'Get in Touch',
          description: 'To collaborate with us, send us an email to this address.',
          name: 'Name',
          namePlaceholder: 'Your name',
          email: 'Email',
          emailPlaceholder: 'your.email@example.com',
          message: 'Message',
          messagePlaceholder: 'How would you like to collaborate with us?',
          submit: 'Send Message',
        },
        toast: {
          title: 'Message sent!',
          description: 'Thank you for reaching out. We\'ll get back to you soon.',
        },
      },
    },
    pets: {
      title: 'Pets',
      searchPlaceholder: 'Search pets...',
      noResults: 'No pets found matching your search.',
      status: {
        available: 'Available',
        pending: 'Pending',
        adopted: 'Adopted',
      },
      type: {
        dog: 'Dog',
        cat: 'Cat',
      },
    },
    expenses: {
      title: 'Expenses',
      tabs: {
        current: 'Current Month',
        history: 'History',
      },
      currentMonth: 'June 2025',
      total: 'Total',
      expensesList: 'Expenses',
      monthlyExpenses: 'Monthly Expenses',
      annualSummary: 'Annual Summary',
      totalYtd: 'Total Expenses (YTD)',
      monthlyAverage: 'Monthly Average',
      highestMonth: 'Highest Month',
      lowestMonth: 'Lowest Month',
      categories: {
        food: 'Food',
        medicine: 'Medicine',
        veterinary: 'Veterinary',
        supplies: 'Supplies',
        utilities: 'Utilities',
        transport: 'Transport',
        staff: 'Staff',
        maintenance: 'Maintenance',
      },
      months: {
        january: 'January',
        february: 'February',
        march: 'March',
        april: 'April',
        may: 'May',
        june: 'June',
        july: 'July',
        august: 'August',
        september: 'September',
        october: 'October',
        november: 'November',
        december: 'December',
      },
    },
    settings: {
      title: 'Settings',
      profile: {
        imageAlt: 'Profile',
        role: 'Shelter Manager',
      },
      account: {
        title: 'Account',
        profile: 'Profile',
        changePassword: 'Change Password',
        notifications: 'Notifications',
        toggleNotifications: 'Toggle notifications',
        emailUpdates: 'Email Updates',
        toggleEmailUpdates: 'Toggle email updates',
      },
      appearance: {
        title: 'Appearance',
        theme: 'Theme',
      },
      support: {
        title: 'Support',
        helpCenter: 'Help Center',
        contactUs: 'Contact Us',
        privacyPolicy: 'Privacy Policy',
      },
      logout: 'Log Out',
    },
    privacy: {
      title: 'Privacy Policy',
      introduction: 'At Hackapet, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.',
      section1: {
        title: 'Information We Collect',
        description: 'We collect information that you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include:',
        item1: 'Contact information (name, email address, phone number)',
        item2: 'Account credentials',
        item3: 'Information about your pets or shelter',
        item4: 'Any other information you choose to provide',
      },
      section2: {
        title: 'How We Use Your Information',
        description: 'We use the information we collect to:',
        item1: 'Provide, maintain, and improve our services',
        item2: 'Process and complete transactions',
        item3: 'Send you technical notices, updates, and support messages',
        item4: 'Respond to your comments, questions, and requests',
        item5: 'Develop new products and services',
      },
      section3: {
        title: 'Information Sharing',
        description: 'We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:',
        item1: 'With your consent',
        item2: 'To comply with laws or regulations',
        item3: 'To protect our rights, property, or safety, or that of our users or others',
      },
      section4: {
        title: 'Data Security',
        description: 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.',
      },
      section5: {
        title: 'Your Rights',
        description: 'Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data.',
      },
      section6: {
        title: 'Changes to This Policy',
        description: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.',
      },
      section7: {
        title: 'Contact Us',
        description: 'If you have any questions about this Privacy Policy, please contact us at',
      },
    },
    terms: {
      title: 'Terms of Service',
      introduction: 'Welcome to Hackapet. By using our services, you agree to these Terms of Service. Please read them carefully.',
      section1: {
        title: 'Acceptance of Terms',
        description: 'By accessing or using Hackapet services, you agree to be bound by these Terms of Service and all applicable laws and regulations.',
      },
      section2: {
        title: 'Services Description',
        description: 'Hackapet provides open-source software solutions for animal shelters, including:',
        item1: 'Comprehensive management system for animal shelters',
        item2: 'Federated platform for finding pets',
        item3: 'Post-adoption tracking system',
      },
      section3: {
        title: 'User Accounts',
        description: 'Some features of our services may require you to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.',
      },
      section4: {
        title: 'Intellectual Property',
        description: 'Our software is open-source and licensed under the GNU General Public License (GPL). You are free to use, modify, and distribute it according to the terms of this license.',
      },
      section5: {
        title: 'User Conduct',
        description: 'You agree not to use our services for any purpose that is unlawful or prohibited by these Terms. Prohibited activities include:',
        item1: 'Violating any applicable laws or regulations',
        item2: 'Infringing on the rights of others',
        item3: 'Attempting to interfere with or disrupt our services',
        item4: 'Using our services to harm animals or promote animal cruelty',
        item5: 'Collecting user data without consent',
      },
      section6: {
        title: 'Privacy',
        description: 'Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference.',
        link: 'Privacy Policy',
      },
      section7: {
        title: 'Modifications to Service',
        description: 'We reserve the right to modify or discontinue, temporarily or permanently, any part of our services with or without notice.',
      },
      section8: {
        title: 'Disclaimer of Warranties',
        description: 'Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied.',
      },
      section9: {
        title: 'Limitation of Liability',
        description: 'In no event shall Hackapet be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.',
      },
      section10: {
        title: 'Indemnification',
        description: 'You agree to indemnify and hold harmless Hackapet and its affiliates from any claims, damages, or expenses arising from your use of our services or your violation of these Terms.',
      },
      section11: {
        title: 'Changes to Terms',
        description: 'We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of our services after any changes indicates your acceptance of the new Terms.',
      },
      section12: {
        title: 'Contact Information',
        description: 'If you have any questions about these Terms, please contact us at',
      },
    },
  },
  es: {
    common: {
      home: 'Inicio',
      aboutUs: 'Sobre Nosotros',
      aboutHackapet: 'Sobre Hackapet',
      collaborate: 'Colaborar',
      privacyPolicy: 'Política de Privacidad',
      termsOfService: 'Términos de Servicio',
      returnHome: 'Volver al Inicio',
    },
    header: {
      openMenu: 'Abrir menú principal',
      closeMenu: 'Cerrar menú',
    },
    footer: {
      description: 'Herramientas digitales de código abierto para optimizar la gestión de refugios y aumentar las adopciones.',
      quickLinks: 'Enlaces Rápidos',
      ourProducts: 'Nuestros Productos',
      stayUpdated: 'Mantente Actualizado',
      newsletterDescription: 'Suscríbete a nuestro boletín para recibir las últimas actualizaciones sobre nuestros proyectos y eventos.',
      emailPlaceholder: 'Tu correo electrónico',
      subscribe: 'Suscribirse',
      copyright: 'Trabajo GPL por Hackapet. Hecho con',
      forAnimals: 'para los animales.',
    },
    navigation: {
      home: 'Inicio',
      pets: 'Mascotas',
      expenses: 'Gastos',
      settings: 'Configuración',
    },
    home: {
      hero: {
        title: 'Software para Refugios de Animales',
        description: 'Herramientas digitales de código abierto para optimizar la gestión de refugios y aumentar las adopciones.',
        cta: 'Saber Más',
        imageAlt: 'Captura de pantalla de la App Hackapet',
      },
      offers: {
        title: 'Lo que Ofrece Hackapet',
        description: 'Hackapet proporciona un conjunto completo de soluciones diseñadas para mejorar las operaciones diarias de los refugios de animales y agilizar los procesos de adopción.',
        feature1: 'Sistema de gestión para un manejo eficiente de registros y datos',
        feature2: 'Plataforma online que conecta mascotas con posibles adoptantes',
        feature3: 'Herramientas de seguimiento post-adopción, garantizando el bienestar animal',
        feature4: 'Interfaz móvil para un acceso fácil y rápido desde cualquier lugar',
        feature5: 'De código abierto y gratuito, disponible para personalización por cualquier refugio',
        imageAlt: 'Sistema de gestión de mascotas',
      },
      altruistic: {
        title: 'Un Proyecto Altruista',
        subtitle: 'para el Bienestar Animal',
        description: 'Hackapet, desarrollado en colaboración con refugios en Torrente y Valencia, es una iniciativa sin ánimo de lucro enfocada en mejorar la vida de los animales en refugios y facilitar el trabajo de los cuidadores.',
        point1: 'Creado altruistamente por voluntarios apasionados por la tecnología y el bienestar animal',
        point2: 'Desarrollado en estrecha cooperación con refugios locales para atender sus necesidades específicas',
        point3: 'Gratuito y de código abierto, permitiendo su uso y adaptación libre',
        point4: 'Centrado en la eficiencia, liberando tiempo para el cuidado directo de los animales',
        point5: 'Evolucionando continuamente gracias a las sugerencias de refugios y la comunidad',
        cta: 'Saber Más',
        imageAlt: 'Bienestar animal',
      },
      impact: {
        title: 'Impacto Real en la Comunidad',
        description: 'Hackapet nació con el propósito de transformar la vida de los animales en refugios, trabajando estrechamente con los refugios de Torrente y Valencia.',
        feature1: {
          title: 'Impulsado por la Comunidad',
          description: 'Desarrollado con y para la comunidad de protección animal, sin fines comerciales.',
        },
        feature2: {
          title: 'Personalizado Localmente',
          description: 'Adaptado para satisfacer las necesidades específicas de los refugios de Torrente y Valencia.',
        },
        feature3: {
          title: 'Mejora de Adopciones',
          description: 'Mejora las adopciones conectando eficazmente a las mascotas con posibles adoptantes.',
        },
        feature4: {
          title: 'Alivio Administrativo',
          description: 'Minimiza la carga administrativa, permitiendo un mayor enfoque en el cuidado animal.',
        },
        cta: 'Únete a Nuestra Causa',
      },
      collaborations: {
        title: 'Colaboraciones y Apoyo',
        description: 'Hackapet se desarrolla gracias a la colaboración con ADAT - Asociación de Defensa Animal de Torrent y SOS Peludetes de Torrente y el apoyo de Hackerspace Valencia, que nos proporciona el espacio, herramientas y otros recursos necesarios para cumplir nuestra misión.',
        partner1: 'Asociación de Defensa Animal de Torrent',
        partner2: 'Refugio de Animales de Torrente',
        partner3: 'Proporcionando espacio y recursos',
        footer: 'Impulsado por y para la comunidad de protección animal, sin ánimo de lucro. Adaptado a las necesidades particulares de los refugios locales. Gracias a los refugios locales que nos han ayudado por su valioso tiempo y esfuerzo que nos han dedicado para empezar a desarrollar estas plataformas.',
      },
      cta: {
        title: '¿Listo para marcar la diferencia?',
        description: 'Únete a nuestra comunidad de desarrolladores, diseñadores y amantes de los animales que trabajan juntos para mejorar el bienestar animal a través de la tecnología.',
        primary: 'Colabora con Nosotros',
        secondary: 'Ver en GitHub',
      },
    },
    about: {
      hero: {
        title: 'Sobre Nosotros',
        description: 'El equipo detrás de Hackapet está dedicado a mejorar el bienestar animal a través de la tecnología.',
      },
      tabs: {
        team: 'El Equipo',
        mission: 'Misión y Valores',
        impact: 'Nuestro Impacto',
      },
      team: {
        title: 'El Equipo',
        description: 'Desarrolladores, gestores, diseñadores y voluntarios comprometidos con mejorar la vida de los animales en refugios, optimizando los procesos de adopción y gestión a través de soluciones tecnológicas, mientras crecemos como comunidad.',
      },
      mission: {
        title: 'Nuestra Misión',
        content: 'En Hackapet, nuestra misión es aprovechar la tecnología para mejorar la vida de los animales en refugios. Desarrollamos soluciones de software de código abierto que agilizan las operaciones de los refugios, aumentan las tasas de adopción y garantizan el bienestar de los animales tanto durante su estancia en los refugios como después de la adopción.',
        imageAlt: 'Nuestra misión',
      },
      values: {
        title: 'Nuestros Valores',
        content: 'Creemos en el poder de la tecnología para generar un impacto positivo en el bienestar animal. Nuestros valores fundamentales incluyen la compasión por todos los seres vivos, la colaboración con refugios y la comunidad tecnológica, la innovación en la resolución de problemas reales y la accesibilidad al mantener nuestras soluciones gratuitas y de código abierto.',
        imageAlt: 'Nuestros valores',
      },
      story: {
        title: 'Nuestra Historia',
        content: 'Hackapet comenzó cuando un grupo de profesionales de la tecnología y amantes de los animales reconocieron los desafíos que enfrentaban los refugios de animales locales en Valencia. Lo que comenzó como un proyecto de hackathon de fin de semana se ha convertido en una comunidad dedicada de voluntarios que trabajan para crear soluciones tecnológicas sostenibles para organizaciones de bienestar animal.',
      },
      impact: {
        title: 'Nuestro Impacto',
        description: 'Desde nuestros inicios, hemos estado marcando una diferencia real en la vida de los animales y los refugios que los cuidan.',
        stat1: {
          title: 'Refugios Apoyados',
          description: 'Refugios de animales en la región de Valencia que utilizan nuestras soluciones de software.',
        },
        stat2: {
          title: 'Adopciones Exitosas',
          description: 'Animales que encontraron hogares para siempre a través de nuestra plataforma de adopción.',
        },
        stat3: {
          title: 'Tiempo Ahorrado',
          description: 'Reducción promedio en trabajo administrativo para el personal del refugio.',
        },
        stat4: {
          title: 'Desarrolladores Voluntarios',
          description: 'Profesionales tecnológicos que contribuyen con sus habilidades a nuestra misión.',
        },
        stat5: {
          title: 'Soluciones de Software',
          description: 'Herramientas completas desarrolladas para diferentes aspectos de la gestión de refugios.',
        },
        stat6: {
          title: 'Código Abierto',
          description: 'Todo nuestro código está disponible gratuitamente para que cualquiera lo use, modifique y mejore.',
        },
      },
    },
    aboutHackapet: {
      hero: {
        title: '¿Qué es Hackapet?',
        description: 'Una iniciativa sin ánimo de lucro que desarrolla software de código abierto para optimizar la gestión de refugios de animales y facilitar las adopciones en España.',
      },
      tabs: {
        mission: 'Misión',
        vision: 'Visión',
        values: 'Valores',
        roadmap: 'Hoja de Ruta',
      },
      mission: {
        title: 'Nuestra Misión',
        description: 'Desarrollamos soluciones tecnológicas de código abierto para revolucionar la gestión de refugios de animales y el proceso de adopción en España.',
        communities: 'Conectamos tres comunidades esenciales:',
        community1: 'Refugios de animales que necesitan herramientas digitales efectivas',
        community2: 'Desarrolladores emergentes que buscan experiencia práctica',
        community3: 'Profesionales de la tecnología comprometidos con causas sociales',
        imageAlt: 'Nuestra misión',
      },
      valueProposition: {
        title: 'Propuesta de Valor',
        point1: 'Software gratuito y de código abierto adaptado a las necesidades específicas de los refugios de animales',
        point2: 'Plataforma integral que incluye gestión de refugios (PetSync), adopciones (PetMatch) y seguimiento post-adopción (AdopTrack)',
        point3: 'Desarrollo colaborativo que beneficia a refugios, desarrolladores y la comunidad tecnológica',
        imageAlt: 'Propuesta de valor',
      },
      vision: {
        title: 'Nuestra Visión',
        description: 'Ser la plataforma tecnológica líder que transforme la gestión de refugios de animales y el proceso de adopción en España.',
        shortTerm: 'Objetivos a Corto Plazo',
        shortTermGoal: 'Implementar PetSync en refugios piloto en Valencia',
        mediumTerm: 'Objetivos a Mediano Plazo',
        mediumTermGoal: 'Expandir la adopción del software por toda España',
        longTerm: 'Objetivos a Largo Plazo',
        longTermGoal: 'Convertirnos en una referencia internacional en software para refugios de animales',
        imageAlt: 'Nuestra visión',
      },
      coreValues: {
        title: 'Nuestros Valores Fundamentales',
        description: 'Los principios que guían nuestro trabajo y definen nuestra comunidad.',
        value1: {
          title: 'Compromiso con el Bienestar Animal',
          description: 'Todo lo que hacemos está enfocado en mejorar la vida de los animales en refugios y encontrarles hogares amorosos.',
        },
        value2: {
          title: 'Colaboración y Trabajo en Equipo',
          description: 'Creemos en el poder de la comunidad y en trabajar juntos para lograr nuestros objetivos.',
        },
        value3: {
          title: 'Transparencia y Código Abierto',
          description: 'Nuestro código y procesos están abiertos para que todos los vean, usen y mejoren.',
        },
        value4: {
          title: 'Innovación Continua',
          description: 'Buscamos constantemente formas nuevas y mejores de resolver problemas y mejorar nuestras soluciones.',
        },
        value5: {
          title: 'Impacto Social Positivo',
          description: 'Medimos nuestro éxito por el cambio positivo que creamos en el mundo.',
        },
        value6: {
          title: 'Impulsado por la Comunidad',
          description: 'Estamos construidos por y para la comunidad, con decisiones guiadas por aquellos a quienes servimos.',
        },
      },
      roadmap: {
        title: 'Nuestra Hoja de Ruta de Productos',
        description: 'El conjunto completo de herramientas que estamos desarrollando para transformar la gestión de refugios de animales.',
        petSync: {
          title: 'PetSync',
          description: 'Sistema integral de gestión para refugios de animales',
          feature1: 'Gestión de animales (registros médicos, comportamiento, alimentación)',
          feature2: 'Automatización de redes sociales para difusión',
          feature3: 'Gestión de adopciones desde el lado del refugio',
          feature4: 'Actualmente en desarrollo para web, iOS y Android',
          imageAlt: 'PetSync',
        },
        petMatch: {
          title: 'PetMatch',
          description: 'Plataforma federada para encontrar mascotas',
          feature1: 'Búsqueda de animales en diferentes refugios',
          feature2: 'Filtros por raza, tipo de pelaje, tamaño, etc.',
          feature3: 'Sistema de adopción simplificado para usuarios finales',
          imageAlt: 'PetMatch',
        },
        adopTrack: {
          title: 'AdopTrack',
          description: 'Sistema de seguimiento post-adopción',
          feature1: 'Monitoreo del progreso de la mascota en su nuevo hogar',
          feature2: 'Seguimiento del comportamiento y adaptación del animal',
          feature3: 'Soporte para nuevos dueños de mascotas',
          imageAlt: 'AdopTrack',
        },
      },
    },
    collaborate: {
      hero: {
        title: 'Cómo Colaborar con Hackapet',
        description: 'Únete a nuestra misión de mejorar el bienestar animal a través de la tecnología. Hay muchas formas en las que puedes contribuir.',
      },
      ways: {
        title: 'Formas de Colaborar',
        description: 'Hackapet es un proyecto abierto y colaborativo que depende de la participación de personas apasionadas por el bienestar animal y la tecnología.',
      },
      tabs: {
        skills: 'Aportar',
        spread: 'Difusión',
        join: 'Unirse',
      },
      skills: {
        developer: {
          title: 'Desarrollador',
          description: 'Ayuda a mejorar nuestra plataforma de código abierto creando nuevas funcionalidades, corrigiendo errores o mejorando la experiencia del usuario.',
          action: 'Contribuir en GitHub',
        },
        designer: {
          title: 'Diseñador',
          description: 'Contribuye con diseños gráficos, UX/UI o materiales promocionales para ayudar a comunicar nuestra misión de manera más efectiva.',
          action: 'Compartir tus Diseños',
        },
        manager: {
          title: 'Gestor de Proyectos',
          description: 'Coordina esfuerzos, organiza tareas y asegura que el equipo esté alineado con nuestros objetivos.',
          action: 'Involúcrate',
        },
        communicator: {
          title: 'Comunicador',
          description: 'Ayuda a difundir la palabra sobre Hackapet a través de redes sociales, blogs o contacto directo con refugios y rescatistas.',
          action: 'Comienza a Compartir',
        },
        shelter: {
          title: 'Colaboración de Refugios',
          description: 'Si trabajas en un refugio de animales, considera integrar Hackapet en tus operaciones y proporcionar retroalimentación valiosa.',
          action: 'Asociarse con Nosotros',
        },
        contributor: {
          title: 'Contribuidor de Código Abierto',
          description: 'Contribuye a nuestro código, documentación o traducciones para hacer nuestras herramientas más accesibles.',
          action: 'Ver Proyectos',
        },
      },
      spread: {
        title: 'Difunde Nuestra Misión',
        description: 'Otra forma importante de colaborar es ayudando a difundir nuestra misión. Cuanta más gente conozca Hackapet, más podremos crecer y ayudar a más refugios.',
        social: {
          title: 'Redes Sociales',
          description: 'Comparte nuestras publicaciones, invita a tus amigos a seguirnos y habla sobre nosotros en tus redes.',
        },
        events: {
          title: 'Eventos',
          description: 'Organiza o participa en eventos locales para hablar sobre Hackapet y nuestras iniciativas.',
        },
        blogs: {
          title: 'Blogs y Medios',
          description: 'Si tienes un blog o acceso a medios de comunicación, publica un artículo sobre nuestro proyecto.',
        },
        cta: 'Obtén Nuestro Kit de Medios',
        imageAlt: 'Difundir el mensaje',
      },
      join: {
        title: 'Únete a Nuestro Equipo',
        description: 'Si estás interesado en un compromiso más formal, considera unirte al equipo de Hackapet como voluntario regular. Siempre estamos buscando personas apasionadas por nuestra misión.',
        openings: 'Puestos Actuales',
        position1: {
          title: 'Desarrollador Móvil (iOS/Android)',
          description: 'Ayúdanos a desarrollar y mantener nuestras aplicaciones móviles para la gestión de refugios.',
        },
        position2: {
          title: 'Investigador UX',
          description: 'Realiza investigaciones de usuarios con refugios para mejorar la experiencia de nuestro producto.',
        },
        position3: {
          title: 'Creador de Contenido',
          description: 'Crea contenido atractivo sobre bienestar animal y nuestras soluciones tecnológicas.',
        },
        cta: 'Solicitar Unirse',
        imageAlt: 'Unirse a nuestro equipo',
      },
      contact: {
        title: 'Contáctanos',
        description: '¿Interesado en colaborar? ¡Nos encantaría saber de ti! Completa el formulario a continuación o envíanos un correo electrónico directamente a woof@hackapet.org.',
        form: {
          title: 'Ponte en Contacto',
          description: 'Para colaborar con nosotros, envíanos un correo a esta dirección.',
          name: 'Nombre',
          namePlaceholder: 'Tu nombre',
          email: 'Correo Electrónico',
          emailPlaceholder: 'tu.correo@ejemplo.com',
          message: 'Mensaje',
          messagePlaceholder: '¿Cómo te gustaría colaborar con nosotros?',
          submit: 'Enviar Mensaje',
        },
        toast: {
          title: '¡Mensaje enviado!',
          description: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
        },
      },
    },
    pets: {
      title: 'Mascotas',
      searchPlaceholder: 'Buscar mascotas...',
      noResults: 'No se encontraron mascotas que coincidan con tu búsqueda.',
      status: {
        available: 'Disponible',
        pending: 'Pendiente',
        adopted: 'Adoptado',
      },
      type: {
        dog: 'Perro',
        cat: 'Gato',
      },
    },
    expenses: {
      title: 'Gastos',
      tabs: {
        current: 'Mes Actual',
        history: 'Historial',
      },
      currentMonth: 'Junio 2025',
      total: 'Total',
      expensesList: 'Gastos',
      monthlyExpenses: 'Gastos Mensuales',
      annualSummary: 'Resumen Anual',
      totalYtd: 'Gastos Totales (Año Actual)',
      monthlyAverage: 'Promedio Mensual',
      highestMonth: 'Mes Más Alto',
      lowestMonth: 'Mes Más Bajo',
      categories: {
        food: 'Alimento',
        medicine: 'Medicina',
        veterinary: 'Veterinario',
        supplies: 'Suministros',
        utilities: 'Servicios',
        transport: 'Transporte',
        staff: 'Personal',
        maintenance: 'Mantenimiento',
      },
      months: {
        january: 'Enero',
        february: 'Febrero',
        march: 'Marzo',
        april: 'Abril',
        may: 'Mayo',
        june: 'Junio',
        july: 'Julio',
        august: 'Agosto',
        september: 'Septiembre',
        october: 'Octubre',
        november: 'Noviembre',
        december: 'Diciembre',
      },
    },
    settings: {
      title: 'Configuración',
      profile: {
        imageAlt: 'Perfil',
        role: 'Gerente de Refugio',
      },
      account: {
        title: 'Cuenta',
        profile: 'Perfil',
        changePassword: 'Cambiar Contraseña',
        notifications: 'Notificaciones',
        toggleNotifications: 'Activar/desactivar notificaciones',
        emailUpdates: 'Actualizaciones por Correo',
        toggleEmailUpdates: 'Activar/desactivar actualizaciones por correo',
      },
      appearance: {
        title: 'Apariencia',
        theme: 'Tema',
      },
      support: {
        title: 'Soporte',
        helpCenter: 'Centro de Ayuda',
        contactUs: 'Contáctanos',
        privacyPolicy: 'Política de Privacidad',
      },
      logout: 'Cerrar Sesión',
    },
    privacy: {
      title: 'Política de Privacidad',
      introduction: 'En Hackapet, nos tomamos tu privacidad en serio. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tu información personal.',
      section1: {
        title: 'Información que Recopilamos',
        description: 'Recopilamos información que nos proporcionas directamente, como cuando creas una cuenta, completas un formulario o te comunicas con nosotros. Esto puede incluir:',
        item1: 'Información de contacto (nombre, dirección de correo electrónico, número de teléfono)',
        item2: 'Credenciales de cuenta',
        item3: 'Información sobre tus mascotas o refugio',
        item4: 'Cualquier otra información que elijas proporcionar',
      },
      section2: {
        title: 'Cómo Usamos tu Información',
        description: 'Usamos la información que recopilamos para:',
        item1: 'Proporcionar, mantener y mejorar nuestros servicios',
        item2: 'Procesar y completar transacciones',
        item3: 'Enviarte avisos técnicos, actualizaciones y mensajes de soporte',
        item4: 'Responder a tus comentarios, preguntas y solicitudes',
        item5: 'Desarrollar nuevos productos y servicios',
      },
      section3: {
        title: 'Compartir Información',
        description: 'No vendemos, intercambiamos ni transferimos tu información personal a terceros excepto en las siguientes circunstancias:',
        item1: 'Con tu consentimiento',
        item2: 'Para cumplir con leyes o regulaciones',
        item3: 'Para proteger nuestros derechos, propiedad o seguridad, o la de nuestros usuarios u otros',
      },
      section4: {
        title: 'Seguridad de Datos',
        description: 'Implementamos medidas de seguridad apropiadas para proteger tu información personal contra acceso, alteración, divulgación o destrucción no autorizados.',
      },
      section5: {
        title: 'Tus Derechos',
        description: 'Dependiendo de tu ubicación, puedes tener ciertos derechos con respecto a tu información personal, como el derecho a acceder, corregir o eliminar tus datos.',
      },
      section6: {
        title: 'Cambios en esta Política',
        description: 'Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página.',
      },
      section7: {
        title: 'Contáctanos',
        description: 'Si tienes alguna pregunta sobre esta Política de Privacidad, por favor contáctanos en',
      },
    },
    terms: {
      title: 'Términos de Servicio',
      introduction: 'Bienvenido a Hackapet. Al utilizar nuestros servicios, aceptas estos Términos de Servicio. Por favor, léelos detenidamente.',
      section1: {
        title: 'Aceptación de Términos',
        description: 'Al acceder o utilizar los servicios de Hackapet, aceptas estar sujeto a estos Términos de Servicio y a todas las leyes y regulaciones aplicables.',
      },
      section2: {
        title: 'Descripción de Servicios',
        description: 'Hackapet proporciona soluciones de software de código abierto para refugios de animales, incluyendo:',
        item1: 'Sistema integral de gestión para refugios de animales',
        item2: 'Plataforma federada para encontrar mascotas',
        item3: 'Sistema de seguimiento post-adopción',
      },
      section3: {
        title: 'Cuentas de Usuario',
        description: 'Algunas funciones de nuestros servicios pueden requerir que crees una cuenta. Eres responsable de mantener la confidencialidad de la información de tu cuenta y de todas las actividades que ocurran bajo tu cuenta.',
      },
      section4: {
        title: 'Propiedad Intelectual',
        description: 'Nuestro software es de código abierto y está licenciado bajo la Licencia Pública General de GNU (GPL). Eres libre de usarlo, modificarlo y distribuirlo de acuerdo con los términos de esta licencia.',
      },
      section5: {
        title: 'Conducta del Usuario',
        description: 'Aceptas no utilizar nuestros servicios para ningún propósito que sea ilegal o esté prohibido por estos Términos. Las actividades prohibidas incluyen:',
        item1: 'Violar cualquier ley o regulación aplicable',
        item2: 'Infringir los derechos de otros',
        item3: 'Intentar interferir o interrumpir nuestros servicios',
        item4: 'Usar nuestros servicios para dañar animales o promover la crueldad animal',
        item5: 'Recopilar datos de usuarios sin consentimiento',
      },
      section6: {
        title: 'Privacidad',
        description: 'Tu uso de nuestros servicios también está regido por nuestra Política de Privacidad, que se incorpora a estos Términos por referencia.',
        link: 'Política de Privacidad',
      },
      section7: {
        title: 'Modificaciones al Servicio',
        description: 'Nos reservamos el derecho de modificar o discontinuar, temporal o permanentemente, cualquier parte de nuestros servicios con o sin previo aviso.',
      },
      section8: {
        title: 'Descargo de Garantías',
        description: 'Nuestros servicios se proporcionan "tal cual" y "según disponibilidad" sin garantías de ningún tipo, ya sean expresas o implícitas.',
      },
      section9: {
        title: 'Limitación de Responsabilidad',
        description: 'En ningún caso Hackapet será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos derivados de o relacionados con tu uso de nuestros servicios.',
      },
      section10: {
        title: 'Indemnización',
        description: 'Aceptas indemnizar y mantener indemne a Hackapet y sus afiliados de cualquier reclamo, daño o gasto que surja de tu uso de nuestros servicios o de tu violación de estos Términos.',
      },
      section11: {
        title: 'Cambios en los Términos',
        description: 'Nos reservamos el derecho de actualizar o modificar estos Términos en cualquier momento sin previo aviso. Tu uso continuado de nuestros servicios después de cualquier cambio indica tu aceptación de los nuevos Términos.',
      },
      section12: {
        title: 'Información de Contacto',
        description: 'Si tienes alguna pregunta sobre estos Términos, por favor contáctanos en',
      },
    },
  },
  val: {
    common: {
      home: 'Inici',
      aboutUs: 'Sobre Nosaltres',
      aboutHackapet: 'Sobre Hackapet',
      collaborate: 'Col·laborar',
      privacyPolicy: 'Política de Privacitat',
      termsOfService: 'Termes de Servei',
      returnHome: 'Tornar a l\'Inici',
    },
    header: {
      openMenu: 'Obrir menú principal',
      closeMenu: 'Tancar menú',
    },
    footer: {
      description: 'Eines digitals de codi obert per a optimitzar la gestió de refugis i augmentar les adopcions.',
      quickLinks: 'Enllaços Ràpids',
      ourProducts: 'Els Nostres Productes',
      stayUpdated: 'Mantín-te Actualitzat',
      newsletterDescription: 'Subscriu-te al nostre butlletí per a rebre les últimes actualitzacions sobre els nostres projectes i esdeveniments.',
      emailPlaceholder: 'El teu correu electrònic',
      subscribe: 'Subscriu-te',
      copyright: 'Treball GPL per Hackapet. Fet amb',
      forAnimals: 'per als animals.',
    },
    navigation: {
      home: 'Inici',
      pets: 'Mascotes',
      expenses: 'Despeses',
      settings: 'Configuració',
    },
    home: {
      hero: {
        title: 'Programari per a Refugis d\'Animals',
        description: 'Eines digitals de codi obert per a optimitzar la gestió de refugis i augmentar les adopcions.',
        cta: 'Saber Més',
        imageAlt: 'Captura de pantalla de l\'App Hackapet',
      },
      offers: {
        title: 'Què Ofereix Hackapet',
        description: 'Hackapet proporciona un conjunt complet de solucions dissenyades per a millorar les operacions diàries dels refugis d\'animals i agilitzar els processos d\'adopció.',
        feature1: 'Sistema de gestió per a un maneig eficient de registres i dades',
        feature2: 'Plataforma en línia que connecta mascotes amb possibles adoptants',
        feature3: 'Eines de seguiment post-adopció, garantint el benestar animal',
        feature4: 'Interfície mòbil per a un accés fàcil i ràpid des de qualsevol lloc',
        feature5: 'De codi obert i gratuït, disponible per a personalització per qualsevol refugi',
        imageAlt: 'Sistema de gestió de mascotes',
      },
      altruistic: {
        title: 'Un Projecte Altruista',
        subtitle: 'per al Benestar Animal',
        description: 'Hackapet, desenvolupat en col·laboració amb refugis a Torrent i València, és una iniciativa sense ànim de lucre enfocada a millorar la vida dels animals en refugis i facilitar el treball dels cuidadors.',
        point1: 'Creat altruistament per voluntaris apassionats per la tecnologia i el benestar animal',
        point2: 'Desenvolupat en estreta cooperació amb refugis locals per atendre les seues necessitats específiques',
        point3: 'Gratuït i de codi obert, permetent el seu ús i adaptació lliure',
        point4: 'Centrat en l\'eficiència, alliberant temps per a la cura directa dels animals',
        point5: 'Evolucionant contínuament gràcies als suggeriments de refugis i la comunitat',
        cta: 'Saber Més',
        imageAlt: 'Benestar animal',
      },
      impact: {
        title: 'Impacte Real en la Comunitat',
        description: 'Hackapet va nàixer amb el propòsit de transformar la vida dels animals en refugis, treballant estretament amb els refugis de Torrent i València.',
        feature1: {
          title: 'Impulsat per la Comunitat',
          description: 'Desenvolupat amb i per a la comunitat de protecció animal, sense fins comercials.',
        },
        feature2: {
          title: 'Personalitzat Localment',
          description: 'Adaptat per a satisfer les necessitats específiques dels refugis de Torrent i València.',
        },
        feature3: {
          title: 'Millora d\'Adopcions',
          description: 'Millora les adopcions connectant eficaçment les mascotes amb possibles adoptants.',
        },
        feature4: {
          title: 'Alleujament Administratiu',
          description: 'Minimitza la càrrega administrativa, permetent un major enfocament en la cura animal.',
        },
        cta: 'Uneix-te a la Nostra Causa',
      },
      collaborations: {
        title: 'Col·laboracions i Suport',
        description: 'Hackapet es desenvolupa gràcies a la col·laboració amb ADAT - Associació de Defensa Animal de Torrent i SOS Peludets de Torrent i el suport d\'Hackerspace València, que ens proporciona l\'espai, eines i altres recursos necessaris per a complir la nostra missió.',
        partner1: 'Associació de Defensa Animal de Torrent',
        partner2: 'Refugi d\'Animals de Torrent',
        partner3: 'Proporcionant espai i recursos',
        footer: 'Impulsat per i per a la comunitat de protecció animal, sense ànim de lucre. Adaptat a les necessitats particulars dels refugis locals. Gràcies als refugis locals que ens han ajudat pel seu valuós temps i esforç que ens han dedicat per a començar a desenvolupar aquestes plataformes.',
      },
      cta: {
        title: 'Preparat per a marcar la diferència?',
        description: 'Uneix-te a la nostra comunitat de desenvolupadors, dissenyadors i amants dels animals que treballen junts per a millorar el benestar animal a través de la tecnologia.',
        primary: 'Col·labora amb Nosaltres',
        secondary: 'Veure en GitHub',
      },
    },
    about: {
      hero: {
        title: 'Sobre Nosaltres',
        description: 'L\'equip darrere de Hackapet està dedicat a millorar el benestar animal a través de la tecnologia.',
      },
      tabs: {
        team: 'L\'Equip',
        mission: 'Missió i Valors',
        impact: 'El Nostre Impacte',
      },
      team: {
        title: 'L\'Equip',
        description: 'Desenvolupadors, gestors, dissenyadors i voluntaris compromesos amb millorar la vida dels animals en refugis, optimitzant els processos d\'adopció i gestió a través de solucions tecnològiques, mentre creixem com a comunitat.',
      },
      mission: {
        title: 'La Nostra Missió',
        content: 'A Hackapet, la nostra missió és aprofitar la tecnologia per a millorar la vida dels animals en refugis. Desenvolupem solucions de programari de codi obert que agilitzen les operacions dels refugis, augmenten les taxes d\'adopció i garanteixen el benestar dels animals tant durant la seua estada als refugis com després de l\'adopció.',
        imageAlt: 'La nostra missió',
      },
      values: {
        title: 'Els Nostres Valors',
        content: 'Creiem en el poder de la tecnologia per a generar un impacte positiu en el benestar animal. Els nostres valors fonamentals inclouen la compassió per tots els éssers vius, la col·laboració amb refugis i la comunitat tecnològica, la innovació en la resolució de problemes reals i l\'accessibilitat en mantindre les nostres solucions gratuïtes i de codi obert.',
        imageAlt: 'Els nostres valors',
      },
      story: {
        title: 'La Nostra Història',
        content: 'Hackapet va començar quan un grup de professionals de la tecnologia i amants dels animals van reconéixer els desafiaments que enfrontaven els refugis d\'animals locals a València. El que va començar com un projecte de hackató de cap de setmana s\'ha convertit en una comunitat dedicada de voluntaris que treballen per a crear solucions tecnològiques sostenibles per a organitzacions de benestar animal.',
      },
      impact: {
        title: 'El Nostre Impacte',
        description: 'Des dels nostres inicis, hem estat marcant una diferència real en la vida dels animals i els refugis que els cuiden.',
        stat1: {
          title: 'Refugis Recolzats',
          description: 'Refugis d\'animals a la regió de València que utilitzen les nostres solucions de programari.',
        },
        stat2: {
          title: 'Adopcions Exitoses',
          description: 'Animals que van trobar llars per sempre a través de la nostra plataforma d\'adopció.',
        },
        stat3: {
          title: 'Temps Estalviat',
          description: 'Reducció mitjana en treball administratiu per al personal del refugi.',
        },
        stat4: {
          title: 'Desenvolupadors Voluntaris',
          description: 'Professionals tecnològics que contribueixen amb les seues habilitats a la nostra missió.',
        },
        stat5: {
          title: 'Solucions de Programari',
          description: 'Eines completes desenvolupades per a diferents aspectes de la gestió de refugis.',
        },
        stat6: {
          title: 'Codi Obert',
          description: 'Tot el nostre codi està disponible gratuïtament perquè qualsevol l\'use, modifique i millore.',
        },
      },
    },
    aboutHackapet: {
      hero: {
        title: 'Què és Hackapet?',
        description: 'Una iniciativa sense ànim de lucre que desenvolupa programari de codi obert per a optimitzar la gestió de refugis d\'animals i facilitar les adopcions a Espanya.',
      },
      tabs: {
        mission: 'Missió',
        vision: 'Visió',
        values: 'Valors',
        roadmap: 'Full de Ruta',
      },
      mission: {
        title: 'La Nostra Missió',
        description: 'Desenvolupem solucions tecnològiques de codi obert per a revolucionar la gestió de refugis d\'animals i el procés d\'adopció a Espanya.',
        communities: 'Connectem tres comunitats essencials:',
        community1: 'Refugis d\'animals que necessiten eines digitals efectives',
        community2: 'Desenvolupadors emergents que busquen experiència pràctica',
        community3: 'Professionals de la tecnologia compromesos amb causes socials',
        imageAlt: 'La nostra missió',
      },
      valueProposition: {
        title: 'Proposta de Valor',
        point1: 'Programari gratuït i de codi obert adaptat a les necessitats específiques dels refugis d\'animals',
        point2: 'Plataforma integral que inclou gestió de refugis (PetSync), adopcions (PetMatch) i seguiment post-adopció (AdopTrack)',
        point3: 'Desenvolupament col·laboratiu que beneficia refugis, desenvolupadors i la comunitat tecnològica',
        imageAlt: 'Proposta de valor',
      },
      vision: {
        title: 'La Nostra Visió',
        description: 'Ser la plataforma tecnològica líder que transforme la gestió de refugis d\'animals i el procés d\'adopció a Espanya.',
        shortTerm: 'Objectius a Curt Termini',
        shortTermGoal: 'Implementar PetSync en refugis pilot a València',
        mediumTerm: 'Objectius a Mitjà Termini',
        mediumTermGoal: 'Expandir l\'adopció del programari per tot Espanya',
        longTerm: 'Objectius a Llarg Termini',
        longTermGoal: 'Convertir-nos en una referència internacional en programari per a refugis d\'animals',
        imageAlt: 'La nostra visió',
      },
      coreValues: {
        title: 'Els Nostres Valors Fonamentals',
        description: 'Els principis que guien el nostre treball i defineixen la nostra comunitat.',
        value1: {
          title: 'Compromís amb el Benestar Animal',
          description: 'Tot el que fem està enfocat a millorar la vida dels animals en refugis i trobar-los llars amoroses.',
        },
        value2: {
          title: 'Col·laboració i Treball en Equip',
          description: 'Creiem en el poder de la comunitat i en treballar junts per a aconseguir els nostres objectius.',
        },
        value3: {
          title: 'Transparència i Codi Obert',
          description: 'El nostre codi i processos estan oberts perquè tots els vegen, usen i milloren.',
        },
        value4: {
          title: 'Innovació Contínua',
          description: 'Busquem constantment formes noves i millors de resoldre problemes i millorar les nostres solucions.',
        },
        value5: {
          title: 'Impacte Social Positiu',
          description: 'Mesurem el nostre èxit pel canvi positiu que creem en el món.',
        },
        value6: {
          title: 'Impulsat per la Comunitat',
          description: 'Estem construïts per i per a la comunitat, amb decisions guiades per aquells a qui servim.',
        },
      },
      roadmap: {
        title: 'El Nostre Full de Ruta de Productes',
        description: 'El conjunt complet d\'eines que estem desenvolupant per a transformar la gestió de refugis d\'animals.',
        petSync: {
          title: 'PetSync',
          description: 'Sistema integral de gestió per a refugis d\'animals',
          feature1: 'Gestió d\'animals (registres mèdics, comportament, alimentació)',
          feature2: 'Automatització de xarxes socials per a difusió',
          feature3: 'Gestió d\'adopcions des del costat del refugi',
          feature4: 'Actualment en desenvolupament per a web, iOS i Android',
          imageAlt: 'PetSync',
        },
        petMatch: {
          title: 'PetMatch',
          description: 'Plataforma federada per a trobar mascotes',
          feature1: 'Cerca d\'animals en diferents refugis',
          feature2: 'Filtres per raça, tipus de pelatge, grandària, etc.',
          feature3: 'Sistema d\'adopció simplificat per a usuaris finals',
          imageAlt: 'PetMatch',
        },
        adopTrack: {
          title: 'AdopTrack',
          description: 'Sistema de seguiment post-adopció',
          feature1: 'Monitoratge del progrés de la mascota en la seua nova llar',
          feature2: 'Seguiment del comportament i adaptació de l\'animal',
          feature3: 'Suport per a nous propietaris de mascotes',
          imageAlt: 'AdopTrack',
        },
      },
    },
    collaborate: {
      hero: {
        title: 'Com Col·laborar amb Hackapet',
        description: 'Uneix-te a la nostra missió de millorar el benestar animal a través de la tecnologia. Hi ha moltes formes en què pots contribuir.',
      },
      ways: {
        title: 'Formes de Col·laborar',
        description: 'Hackapet és un projecte obert i col·laboratiu que depén de la participació de persones apassionades pel benestar animal i la tecnologia.',
      },
      tabs: {
        skills: 'Contribuir',
        spread: 'Difondre',
        join: 'Unir-se',
      },
      skills: {
        developer: {
          title: 'Desenvolupador',
          description: 'Ajuda a millorar la nostra plataforma de codi obert creant noves funcionalitats, corregint errors o millorant l\'experiència de l\'usuari.',
          action: 'Contribuir en GitHub',
        },
        designer: {
          title: 'Dissenyador',
          description: 'Contribueix amb dissenys gràfics, UX/UI o materials promocionals per a ajudar a comunicar la nostra missió de manera més efectiva.',
          action: 'Compartir els teus Dissenys',
        },
        manager: {
          title: 'Gestor de Projectes',
          description: 'Coordina esforços, organitza tasques i assegura que l\'equip estiga alineat amb els nostres objectius.',
          action: 'Involucra\'t',
        },
        communicator: {
          title: 'Comunicador',
          description: 'Ajuda a difondre la paraula sobre Hackapet a través de xarxes socials, blogs o contacte directe amb refugis i rescatistes.',
          action: 'Comença a Compartir',
        },
        shelter: {
          title: 'Col·laboració de Refugis',
          description: 'Si treballes en un refugi d\'animals, considera integrar Hackapet en les teues operacions i proporcionar retroalimentació valuosa.',
          action: 'Associar-se amb Nosaltres',
        },
        contributor: {
          title: 'Contribuïdor de Codi Obert',
          description: 'Contribueix al nostre codi, documentació o traduccions per a fer les nostres eines més accessibles.',
          action: 'Veure Projectes',
        },
      },
      spread: {
        title: 'Difon la Nostra Missió',
        description: 'Una altra forma important de col·laborar és ajudant a difondre la nostra missió. Com més gent conega Hackapet, més podrem créixer i ajudar a més refugis.',
        social: {
          title: 'Xarxes Socials',
          description: 'Comparteix les nostres publicacions, convida als teus amics a seguir-nos i parla sobre nosaltres en les teues xarxes.',
        },
        events: {
          title: 'Esdeveniments',
          description: 'Organitza o participa en esdeveniments locals per a parlar sobre Hackapet i les nostres iniciatives.',
        },
        blogs: {
          title: 'Blogs i Mitjans',
          description: 'Si tens un blog o accés a mitjans de comunicació, publica un article sobre el nostre projecte.',
        },
        cta: 'Obtín el Nostre Kit de Mitjans',
        imageAlt: 'Difondre el missatge',
      },
      join: {
        title: 'Uneix-te al Nostre Equip',
        description: 'Si estàs interessat en un compromís més formal, considera unir-te a l\'equip de Hackapet com a voluntari regular. Sempre estem buscant persones apassionades per la nostra missió.',
        openings: 'Llocs Actuals',
        position1: {
          title: 'Desenvolupador Mòbil (iOS/Android)',
          description: 'Ajuda\'ns a desenvolupar i mantindre les nostres aplicacions mòbils per a la gestió de refugis.',
        },
        position2: {
          title: 'Investigador UX',
          description: 'Realitza investigacions d\'usuaris amb refugis per a millorar l\'experiència del nostre producte.',
        },
        position3: {
          title: 'Creador de Contingut',
          description: 'Crea contingut atractiu sobre benestar animal i les nostres solucions tecnològiques.',
        },
        cta: 'Sol·licitar Unir-se',
        imageAlt: 'Unir-se al nostre equip',
      },
      contact: {
        title: 'Contacta\'ns',
        description: 'Interessat en col·laborar? Ens encantaria saber de tu! Completa el formulari a continuació o envia\'ns un correu electrònic directament a woof@hackapet.org.',
        form: {
          title: 'Posa\'t en Contacte',
          description: 'Per a col·laborar amb nosaltres, envia\'ns un correu a aquesta adreça.',
          name: 'Nom',
          namePlaceholder: 'El teu nom',
          email: 'Correu Electrònic',
          emailPlaceholder: 'el.teu.correu@exemple.com',
          message: 'Missatge',
          messagePlaceholder: 'Com t\'agradaria col·laborar amb nosaltres?',
          submit: 'Enviar Missatge',
        },
        toast: {
          title: 'Missatge enviat!',
          description: 'Gràcies per contactar-nos. Ens posarem en contacte amb tu prompte.',
        },
      },
    },
    pets: {
      title: 'Mascotes',
      searchPlaceholder: 'Buscar mascotes...',
      noResults: 'No s\'han trobat mascotes que coincidisquen amb la teua cerca.',
      status: {
        available: 'Disponible',
        pending: 'Pendent',
        adopted: 'Adoptat',
      },
      type: {
        dog: 'Gos',
        cat: 'Gat',
      },
    },
    expenses: {
      title: 'Despeses',
      tabs: {
        current: 'Mes Actual',
        history: 'Historial',
      },
      currentMonth: 'Juny 2025',
      total: 'Total',
      expensesList: 'Despeses',
      monthlyExpenses: 'Despeses Mensuals',
      annualSummary: 'Resum Anual',
      totalYtd: 'Despeses Totals (Any Actual)',
      monthlyAverage: 'Mitjana Mensual',
      highestMonth: 'Mes Més Alt',
      lowestMonth: 'Mes Més Baix',
      categories: {
        food: 'Aliment',
        medicine: 'Medicina',
        veterinary: 'Veterinari',
        supplies: 'Subministraments',
        utilities: 'Serveis',
        transport: 'Transport',
        staff: 'Personal',
        maintenance: 'Manteniment',
      },
      months: {
        january: 'Gener',
        february: 'Febrer',
        march: 'Març',
        april: 'Abril',
        may: 'Maig',
        june: 'Juny',
        july: 'Juliol',
        august: 'Agost',
        september: 'Setembre',
        october: 'Octubre',
        november: 'Novembre',
        december: 'Desembre',
      },
    },
    settings: {
      title: 'Configuració',
      profile: {
        imageAlt: 'Perfil',
        role: 'Gerent de Refugi',
      },
      account: {
        title: 'Compte',
        profile: 'Perfil',
        changePassword: 'Canviar Contrasenya',
        notifications: 'Notificacions',
        toggleNotifications: 'Activar/desactivar notificacions',
        emailUpdates: 'Actualitzacions per Correu',
        toggleEmailUpdates: 'Activar/desactivar actualitzacions per correu',
      },
      appearance: {
        title: 'Aparença',
        theme: 'Tema',
      },
      support: {
        title: 'Suport',
        helpCenter: 'Centre d\'Ajuda',
        contactUs: 'Contacta\'ns',
        privacyPolicy: 'Política de Privacitat',
      },
      logout: 'Tancar Sessió',
    },
    privacy: {
      title: 'Política de Privacitat',
      introduction: 'A Hackapet, ens prenem seriosament la teua privacitat. Aquesta Política de Privacitat explica com recopilem, usem i protegim la teua informació personal.',
      section1: {
        title: 'Informació que Recopilem',
        description: 'Recopilem informació que ens proporciones directament, com quan crees un compte, completes un formulari o et comuniques amb nosaltres. Això pot incloure:',
        item1: 'Informació de contacte (nom, adreça de correu electrònic, número de telèfon)',
        item2: 'Credencials de compte',
        item3: 'Informació sobre les teues mascotes o refugi',
        item4: 'Qualsevol altra informació que tries proporcionar',
      },
      section2: {
        title: 'Com Usem la teua Informació',
        description: 'Usem la informació que recopilem per a:',
        item1: 'Proporcionar, mantindre i millorar els nostres serveis',
        item2: 'Processar i completar transaccions',
        item3: 'Enviar-te avisos tècnics, actualitzacions i missatges de suport',
        item4: 'Respondre als teus comentaris, preguntes i sol·licituds',
        item5: 'Desenvolupar nous productes i serveis',
      },
      section3: {
        title: 'Compartir Informació',
        description: 'No venem, intercanviem ni transferim la teua informació personal a tercers excepte en les següents circumstàncies:',
        item1: 'Amb el teu consentiment',
        item2: 'Per a complir amb lleis o regulacions',
        item3: 'Per a protegir els nostres drets, propietat o seguretat, o la dels nostres usuaris o altres',
      },
      section4: {
        title: 'Seguretat de Dades',
        description: 'Implementem mesures de seguretat apropiades per a protegir la teua informació personal contra accés, alteració, divulgació o destrucció no autoritzats.',
      },
      section5: {
        title: 'Els teus Drets',
        description: 'Depenent de la teua ubicació, pots tindre certs drets respecte a la teua informació personal, com el dret a accedir, corregir o eliminar les teues dades.',
      },
      section6: {
        title: 'Canvis en aquesta Política',
        description: 'Podem actualitzar aquesta Política de Privacitat de tant en tant. Et notificarem qualsevol canvi publicant la nova Política de Privacitat en aquesta pàgina.',
      },
      section7: {
        title: 'Contacta\'ns',
        description: 'Si tens alguna pregunta sobre aquesta Política de Privacitat, per favor contacta\'ns en',
      },
    },
    terms: {
      title: 'Termes de Servei',
      introduction: 'Benvingut a Hackapet. En utilitzar els nostres serveis, acceptes aquests Termes de Servei. Per favor, llig-los detingudament.',
      section1: {
        title: 'Acceptació de Termes',
        description: 'En accedir o utilitzar els serveis de Hackapet, acceptes estar subjecte a aquests Termes de Servei i a totes les lleis i regulacions aplicables.',
      },
      section2: {
        title: 'Descripció de Serveis',
        description: 'Hackapet proporciona solucions de programari de codi obert per a refugis d\'animals, incloent:',
        item1: 'Sistema integral de gestió per a refugis d\'animals',
        item2: 'Plataforma federada per a trobar mascotes',
        item3: 'Sistema de seguiment post-adopció',
      },
      section3: {
        title: 'Comptes d\'Usuari',
        description: 'Algunes funcions dels nostres serveis poden requerir que crees un compte. Ets responsable de mantindre la confidencialitat de la informació del teu compte i de totes les activitats que ocórreguen sota el teu compte.',
      },
      section4: {
        title: 'Propietat Intel·lectual',
        description: 'El nostre programari és de codi obert i està llicenciat sota la Llicència Pública General de GNU (GPL). Ets lliure d\'usar-lo, modificar-lo i distribuir-lo d\'acord amb els termes d\'aquesta llicència.',
      },
      section5: {
        title: 'Conducta de l\'Usuari',
        description: 'Acceptes no utilitzar els nostres serveis per a cap propòsit que siga il·legal o estiga prohibit per aquests Termes. Les activitats prohibides inclouen:',
        item1: 'Violar qualsevol llei o regulació aplicable',
        item2: 'Infringir els drets d\'altres',
        item3: 'Intentar interferir o interrompre els nostres serveis',
        item4: 'Usar els nostres serveis per a danyar animals o promoure la crueltat animal',
        item5: 'Recopilar dades d\'usuaris sense consentiment',
      },
      section6: {
        title: 'Privacitat',
        description: 'El teu ús dels nostres serveis també està regit per la nostra Política de Privacitat, que s\'incorpora a aquests Termes per referència.',
        link: 'Política de Privacitat',
      },
      section7: {
        title: 'Modificacions al Servei',
        description: 'Ens reservem el dret de modificar o discontinuar, temporal o permanentment, qualsevol part dels nostres serveis amb o sense previ avís.',
      },
      section8: {
        title: 'Descàrrec de Garanties',
        description: 'Els nostres serveis es proporcionen "tal qual" i "segons disponibilitat" sense garanties de cap tipus, ja siguen expresses o implícites.',
      },
      section9: {
        title: 'Limitació de Responsabilitat',
        description: 'En cap cas Hackapet serà responsable per danys indirectes, incidentals, especials, conseqüents o punitius derivats de o relacionats amb el teu ús dels nostres serveis.',
      },
      section10: {
        title: 'Indemnització',
        description: 'Acceptes indemnitzar i mantindre indemne a Hackapet i els seus afiliats de qualsevol reclamació, dany o despesa que sorgisca del teu ús dels nostres serveis o de la teua violació d\'aquests Termes.',
      },
      section11: {
        title: 'Canvis en els Termes',
        description: 'Ens reservem el dret d\'actualitzar o modificar aquests Termes en qualsevol moment sense previ avís. El teu ús continuat dels nostres serveis després de qualsevol canvi indica la teua acceptació dels nous Termes.',
      },
      section12: {
        title: 'Informació de Contacte',
        description: 'Si tens alguna pregunta sobre aquests Termes, per favor contacta\'ns en',
      },
    },
  },
};

// Create a context for the i18n
type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  t: (key: string) => key,
});

// Provider component
export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  // Load locale from localStorage on client side
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    if (savedLocale && locales.includes(savedLocale)) {
      setLocale(savedLocale);
    }
  }, []);

  // Save locale to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  const t = (key: string): string => {
    return getTranslation(locale, key);
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

// Helper function to get translations
export function getTranslation(locale: Locale, path: string): string {
  const keys = path.split('.');
  let current: any = dictionaries[locale];

  for (const key of keys) {
    if (current[key] === undefined) {
      console.warn(`Translation missing: ${locale}.${path}`);
      // Fallback to English
      if (locale !== 'en') {
        return getTranslation('en', path);
      }
      return path;
    }
    current = current[key];
  }

  if (typeof current !== 'string') {
    console.warn(`Translation is not a string: ${locale}.${path}`);
    return path;
  }

  return current;
}

// Hook for use in client components
export function useTranslation() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    return {
      locale: defaultLocale,
      setLocale: () => {},
      t: (key: string) => getTranslation(defaultLocale, key),
    };
  }
  return context;
}