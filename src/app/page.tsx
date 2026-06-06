"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { DollarSign, Target, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSizeMediumTitles"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Features",
          id: "#features",
        },
        {
          name: "How It Works",
          id: "#about",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Nexus"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "sparkles-gradient",
      }}
      title="Your Body, Mind, and Money—United"
      description="Nexus reads your stress in real time, connects it to your spending patterns, and surrounds you with silent peers who understand. No wearables. No judgment. Just clarity and calm."
      tag="Integrated Wellness"
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Begin Your Nexus Journey",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169842.jpg",
          imageAlt: "Nexus app dashboard on mobile",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/small-abstract-eyes-watercolor-surface_23-2148226983.jpg",
          imageAlt: "Abstract representation of holistic wellness",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/worker-examines-phone-with-greenscreen_482257-76605.jpg",
          imageAlt: "Worker holding device with greenscreen",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-using-tablet-pc_1098-22051.jpg",
          imageAlt: "Cropped unrecognizable person analysing financial chart on smartphone",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-digital-tablet-safety-glasses-broken-mobile-phone-wooden-background_23-2147922206.jpg",
          imageAlt: "White desk with glasses, phone with a diagram, earphones",
        },
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Trusted by thousands of users"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={true}
      imagePosition="left"
      title="A Holistic Approach to Your Wellbeing"
      description="Nexus reimagines self-awareness by seamlessly integrating physical health, mental wellbeing, and financial behavior. Our privacy-first super app utilizes innovative psychosomatic measurement technology via your front camera, offering deep insights without the need for wearables or invasive tracking. Discover the true connection between your inner state and outer actions."
      bulletPoints={[
        {
          title: "Real-time Psychosomatic Insights",
          description: "Your front camera passively measures stress, providing immediate feedback on your physiological state.",
        },
        {
          title: "AI-Driven Behavioral Coaching",
          description: "Receive personalized nudges and guidance based on your unique patterns, helping you build healthier habits.",
        },
        {
          title: "Silent Community Support",
          description: "Connect with peers who understand your journey in a judgment-free, privacy-first environment.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-hands-holding-smartphone_23-2150671564.jpg"
      imageAlt="Nexus app showing psychosomatic measurement"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Stress & Mood Mapping",
          description: "Understand how daily events impact your emotional and physiological state in real-time.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-character-emerging-from-smartphone_23-2151336647.jpg",
          imageAlt: "App screen showing stress and mood mapping",
        },
        {
          title: "Financial Behavior Linkage",
          description: "Uncover the emotional triggers behind your spending patterns and manage financial anxiety effectively.",
          imageSrc: "http://img.b2bpic.net/free-photo/busy-businesswoman-working-home_273609-20297.jpg",
          imageAlt: "App screen showing financial insights",
        },
        {
          title: "Personalized AI Nudges",
          description: "Receive gentle, actionable guidance tailored to your unique behavioral cycles, fostering positive change.",
          imageSrc: "http://img.b2bpic.net/free-photo/staistics-business-strategy-planning-research-digital-tablet-concept_53876-26413.jpg",
          imageAlt: "App screen showing AI coaching nudges",
        },
        {
          title: "Privacy-First Community",
          description: "Share experiences and insights with a supportive community, confident that your data and identity are protected.",
          imageSrc: "http://img.b2bpic.net/free-photo/roommates-sharing-happy-moments-together_23-2149112056.jpg",
          imageAlt: "App screen showing silent community feature",
        },
      ]}
      title="Intelligent Features for a Balanced Life"
      description="Nexus brings together advanced technology and empathetic design to offer unparalleled support across all dimensions of your wellness. Experience clarity, gain control, and foster peace of mind."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "users",
          value: "100K+",
          title: "Active Users",
          description: "Engaged individuals building a healthier life.",
          icon: Users,
        },
        {
          id: "stress-reduction",
          value: "30%",
          title: "Stress Reduction",
          description: "Average decrease in self-reported stress levels.",
          icon: Zap,
        },
        {
          id: "focus-improvement",
          value: "25%",
          title: "Improved Focus",
          description: "Enhancement in daily concentration and productivity.",
          icon: Target,
        },
        {
          id: "financial-awareness",
          value: "40%",
          title: "Financial Awareness",
          description: "Increase in understanding emotional spending triggers.",
          icon: DollarSign,
        },
      ]}
      title="Real-world Impact & Growing Community"
      description="Join thousands who are transforming their lives with Nexus. Our users consistently report significant improvements across key wellness indicators."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "WellnessTech Review",
        "Mindful Money Magazine",
        "Digital Health Forum",
        "Behavioral Finance Institute",
        "Future of Wellbeing Summit",
        "Zenith Innovations",
        "Human-Centric AI Labs",
      ]}
      title="Trusted by Innovators & Wellness Advocates"
      description="Our mission to provide holistic wellness insights is supported by leading voices in tech, health, and finance."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          title: "Finally, a unified view of my wellbeing!",
          quote: "Nexus has been a game-changer. As a professional, my anxiety often peaks, leading to impulse spending. This app connected the dots for me, providing data-driven self-awareness and helping me recover my financial peace.",
          name: "Sarah Johnson",
          role: "Tech Consultant",
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-young-woman-smiling-using-tablet-outside_169016-25260.jpg",
          imageAlt: "Sarah Johnson",
        },
        {
          id: "2",
          title: "Seamless integration, genuine support.",
          quote: "I've tried many meditation and fitness apps, but Nexus unifies everything. The silent community feature is incredible – all the benefits of peer presence without the social pressure. It truly understands the modern wellness seeker.",
          name: "Michael Chen",
          role: "Marketing Specialist",
          imageSrc: "http://img.b2bpic.net/free-photo/pensive-office-worker-sitting-table-looking-laptop_74855-4344.jpg",
          imageAlt: "Michael Chen",
        },
        {
          id: "3",
          title: "My financial anxiety is finally manageable.",
          quote: "The shame around emotional spending was immense. Nexus helped me identify my patterns, showing the direct link between my stress and my finances. The behavioral nudges are subtle but effective, allowing me to celebrate small wins privately.",
          name: "Emily Rodriguez",
          role: "Operations Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-mid-adult-businesswoman-with-coffee-phone_1262-19184.jpg",
          imageAlt: "Emily Rodriguez",
        },
        {
          id: "4",
          title: "Insights that truly empower.",
          quote: "I appreciate how Nexus provides deep, actionable insights without invasive tracking. It respects my privacy while empowering me to understand my body and mind better. The clarity it brings is unmatched.",
          name: "David Kim",
          role: "Product Lead",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-suffering-from-schizophrenia_23-2149332544.jpg",
          imageAlt: "David Kim",
        },
        {
          id: "5",
          title: "A holistic approach that works.",
          quote: "This app is exactly what I needed. It's not just about tracking data; it's about understanding the interconnectedness of my health. Nexus has helped me create a more balanced and conscious lifestyle.",
          name: "Jessica Lee",
          role: "Wellness Coach",
          imageSrc: "http://img.b2bpic.net/free-photo/gynecologist-getting-ready-appointment_23-2149353010.jpg",
          imageAlt: "Jessica Lee",
        },
        {
          id: "6",
          title: "Smart, supportive, and truly innovative.",
          quote: "Nexus is brilliant. It’s given me the tools to manage stress-induced financial habits and improve my overall focus. The AI is incredibly smart, offering support that feels personalized and impactful.",
          name: "Alex Miller",
          role: "Financial Analyst",
          imageSrc: "http://img.b2bpic.net/free-photo/runner-training-marathon_23-2149284969.jpg",
          imageAlt: "Alex Miller",
        },
      ]}
      title="Voices of Transformation"
      description="Hear how Nexus is making a real difference in the lives of our diverse users, fostering balance and clarity."
    />
  </div>

  <div id="community-features" data-section="community-features">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "community-1",
          name: "Silent Peer Support",
          price: "Private",
          imageSrc: "http://img.b2bpic.net/free-photo/online-shopping-concept_23-2151896847.jpg",
          imageAlt: "App screen showing silent community chat",
        },
        {
          id: "community-2",
          name: "Guided Wellbeing Journeys",
          price: "Included",
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-moon-background_23-2150930714.jpg",
          imageAlt: "App screen showing guided exercises",
        },
        {
          id: "community-3",
          name: "Personalized Financial Insights",
          price: "Smart",
          imageSrc: "http://img.b2bpic.net/free-photo/mature-businessman-using-cellphone-raising-brows_1262-3040.jpg",
          imageAlt: "App screen showing personalized financial insights",
        },
        {
          id: "community-4",
          name: "Progress & Streak Tracking",
          price: "Motivating",
          imageSrc: "http://img.b2bpic.net/free-vector/workout-tracker-app-screens_23-2148626370.jpg",
          imageAlt: "App screen showing progress tracking",
        },
        {
          id: "community-5",
          name: "Curated Resource Library",
          price: "Empowering",
          imageSrc: "http://img.b2bpic.net/free-photo/teenage-girl-with-phone-bed-morning-gadget-addiction-adolescence_169016-67964.jpg",
          imageAlt: "App screen showing resource library",
        },
        {
          id: "community-6",
          name: "Customizable Dashboard",
          price: "Tailored",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-business-items-with-growth-chart_23-2148780570.jpg",
          imageAlt: "App screen showing customizable dashboard",
        },
      ]}
      title="Connect, Share, Grow: The Nexus Experience"
      description="Explore the unique features that make Nexus more than just an app – it's your partner in holistic growth, designed for true self-discovery and a supportive, silent community."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",
          title: "How does Nexus measure psychosomatic data without wearables?",
          content: "Nexus utilizes advanced photoplethysmography (PPG) technology via your device's front camera to passively analyze subtle physiological changes, providing real-time stress and mood insights non-invasively. No extra gadgets needed.",
        },
        {
          id: "faq-2",
          title: "Is my data and privacy truly protected?",
          content: "Absolutely. Privacy is at the core of Nexus. All data is processed on-device or encrypted before transmission. We never share your personal health or financial information, and our community features are designed for anonymity and discretion.",
        },
        {
          id: "faq-3",
          title: "What kind of behavioral coaching does the AI provide?",
          content: "Our AI analyzes your unique patterns to offer personalized, gentle nudges. This could include suggestions for mindful breaks during peak stress, insights into emotional spending triggers, or tailored exercises to improve focus, all without judgment.",
        },
        {
          id: "faq-4",
          title: "How does the 'silent community' feature work?",
          content: "The silent community allows you to connect with peers who share similar experiences or goals without direct social interaction. You can see aggregated insights and shared challenges, fostering a sense of belonging and mutual understanding in a private, non-public forum.",
        },
        {
          id: "faq-5",
          title: "Is Nexus suitable for managing serious mental health conditions?",
          content: "Nexus is designed to promote general wellbeing and provide self-awareness tools. It is not a medical device and should not replace professional medical or psychological advice, diagnosis, or treatment for serious conditions. Please consult a healthcare professional for specific concerns.",
        },
      ]}
      sideTitle="Your Questions, Answered"
      sideDescription="Find quick answers to the most common questions about Nexus, our technology, privacy, and how we help you achieve holistic wellness."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Start Your Journey"
      title="Unlock Your Integrated Wellness"
      description="Ready to unify your body, mind, and money? Join the Nexus community today and begin your path to holistic self-awareness and balanced living. Sign up for early access and updates."
      imageSrc="http://img.b2bpic.net/free-photo/fitness-woman-using-mobile-phone_23-2148207415.jpg"
      imageAlt="Mobile phone showing Nexus app sign-up screen"
      mediaAnimation="slide-up"
      mediaPosition="right"
      inputPlaceholder="Enter your email"
      buttonText="Get Early Access"
      termsText="By clicking Get Early Access you're confirming that you agree with our Terms and Conditions."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Nexus"
      columns={[
        {
          title: "Product",
          items: [
            {
              label: "Features",
              href: "#features",
            },
            {
              label: "How It Works",
              href: "#about",
            },
            {
              label: "Community",
              href: "#community-features",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Blog",
              href: "#",
            },
            {
              label: "Support",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Nexus. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
