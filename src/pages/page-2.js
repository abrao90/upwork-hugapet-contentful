import React from "react"
import SEO from "../components/seo"

import { ThemeProvider } from "styled-components"
import Sticky from "react-stickynode"
import { hostingTheme } from "../theme/index"
import {
  GlobalStyle,
  ContentWrapper,
} from "../theme/hosting.style"
import { ResetCSS } from "../components/assets/css/style"
import Navbar from "../components/Navbar"
import FeatureSection from "../components/Features"
import InfoSection from "../components/Info"
import DomainSection from "../components/Domain"
import PaymentSection from "../components/Payment"
import GuaranteeSection from "../components/Guarantee"
import FaqSection from "../components/Faq"
import ServicesSection from "../components/Services"
import BannerSection from "../components/Banner"
import PricingSection from "../components/Pricing"
import TestimonialSection from "../components/Testimonials"
import ContactSection from "../components/Contact"
import Footer from "../components/Footer"
import { DrawerProvider } from "../components/DrawerContext"
import { ParallaxProvider } from "react-scroll-parallax"
import SEO from "../components/SEO"

export default () => {
  return (
    <ThemeProvider theme={hostingTheme}>
      <ParallaxProvider>
        <SEO title="Hug A Pet | Vets at" />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
{/* Section targetted at customers  */}
          <BannerSection />
          <ServicesSection />
          <FeatureSection />
          <TestimonialSection />
          <GuaranteeSection />
{/* Section targetted at vets   */}
          <DomainSection />
          <InfoSection />
          <PricingSection />
          <PaymentSection />
          <FaqSection />
          <ContactSection />
{/* Section footer with links  */}
          <Footer />
        </ContentWrapper>
      </ParallaxProvider>
    </ThemeProvider>
  )
}
