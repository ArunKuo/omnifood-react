import React from 'react';
import Header from './components/header/header.component';
import SectionFeatures from './components/section-features/section-features.component';
import SectionMeals from './components/section-meals/section-meals.component';
import SectionSteps from './components/section-stpes/section-steps.component';
import SectionCites from './components/section-cities/section-cities.component';
import SectionTestimonials from './components/section-testimonials/section-testimonials.component';
import SectionPlans from './components/section-plans/section-plans.component';
import SectionForm from './components/section-form/section-form.component';
import Footer from './components/footer/footer.component';
import './App.css';
import './vendors/css/grid.css';
import './vendors/css/ionicons.min.css';
import './vendors/css/normalize.css';

function App() {
  return (
    <div className="App">
      <Header />  
      <SectionFeatures />
      <SectionMeals />
      <SectionSteps />
      <SectionCites />
      <SectionTestimonials />
      <SectionPlans />
      <SectionForm />
      <Footer />
    </div>
  );
}

export default App;
