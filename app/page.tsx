"use client"

import React, { useState } from 'react';

const ResuscitationAcademyApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState<any>(null);

  const SURVEY_MONKEY_FEEDBACK = 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=Rlxec0Q5vkWEZXtX_fuThTpgjiprvlVPgo57ut0ikepUMkRCRlYwNFVURzY4VVVFWElWUURKRFVRNy4u';
  const PROJECT_SUBMISSION = 'https://forms.office.com/Pages/ResponsePage.aspx?id=Rlxec0Q5vkWEZXtX_fuThTpgjiprvlVPgo57ut0ikepUQjg2SEU5OUY3NEJKOUFYUE1INkJXTEpEUC4u';
  const REGISTRATION_LINK = 'https://forms.gle/GzT8sM9S8NBEfwFfA';

  const faculty = [
    {
      name: 'Chief Nathaniel Hartinger',
      title: 'Opening Remarks – Day 1',
      credentials: '',
      specialty: 'Fire & EMS Leadership',
      bio: 'Chief Nathaniel Hartinger provides leadership and strategic direction for the UC Davis Fire Department. He brings extensive experience in fire and emergency medical services, with a commitment to advancing resuscitation excellence within the department and the broader community.',
      image: null,
      initials: 'NH',
      linkedin: null
    },
    {
      name: 'Douglas Brim',
      title: 'Opening Remarks & Closing – Day 1',
      credentials: '',
      specialty: 'EMS Leadership & Quality Improvement',
      bio: 'Douglas Brim serves a key leadership role in the UC Davis Fire Department\'s emergency medical services program. He is dedicated to building a culture of excellence in resuscitation and contributes to the department\'s ongoing quality improvement efforts in cardiac arrest response.',
      image: null,
      initials: 'DB',
      linkedin: null
    },
    {
      name: 'Captain Scott Hatcher',
      title: 'HP-CPR Lead Instructor',
      credentials: 'Captain',
      specialty: 'High-Performance CPR & EMS Training',
      bio: 'Captain Scott Hatcher serves as the HP-CPR lead instructor for the UC Davis Resuscitation Academy. He leads the HP-CPR demonstration and training sessions, bringing hands-on expertise in high-performance CPR team coordination and real-world resuscitation operations within the UC Davis Fire Department.',
      image: null,
      initials: 'SH',
      linkedin: null
    },
    {
      name: 'Dr. Lisa Mills',
      title: 'Faculty – 10 Steps & Closing Remarks',
      credentials: 'MD',
      specialty: 'Emergency Medicine & Resuscitation',
      bio: 'Dr. Lisa Mills is a faculty member of the UC Davis Resuscitation Academy and presents on the 10 Steps to Improve Survival. She provides closing remarks and evaluation guidance at the end of Day 1, helping participants synthesize key learning objectives from the Leadership Workshop.',
      image: null,
      initials: 'LM',
      linkedin: null
    },
    {
      name: 'Dr. John Rose',
      title: 'Faculty – Science of CPR',
      credentials: 'MD',
      specialty: 'Resuscitation Science & Emergency Medicine',
      bio: 'Dr. John Rose presents on the Science of CPR and Time/Quality at the Resuscitation Academy Leadership Workshop. He brings a deep understanding of the evidence base underlying modern CPR practices and helps attendees apply scientific principles to improve cardiac arrest outcomes.',
      image: null,
      initials: 'JR',
      linkedin: null
    },
    {
      name: 'Dr. Miranda Lewis',
      title: 'Faculty – Telephone CPR',
      credentials: 'MD',
      specialty: 'Telecommunicator CPR (T-CPR)',
      bio: 'Dr. Miranda Lewis presents on Telephone CPR (T-CPR) during the Leadership Workshop. She covers the science and practice of dispatcher-assisted CPR, including protocols, training approaches, and strategies for building high-performing T-CPR programs in emergency communication centers.',
      image: null,
      initials: 'ML',
      linkedin: null
    },
    {
      name: 'Captain Brian Morr',
      title: 'Faculty – Measuring and Data',
      credentials: 'Captain',
      specialty: 'EMS Data & Quality Improvement',
      bio: 'Captain Brian Morr leads the Measuring and Data session at the Resuscitation Academy Leadership Workshop. He focuses on how EMS systems can leverage data to drive quality improvement in cardiac arrest response, including collection methods, key metrics, and strategies for sustained system improvement.',
      image: null,
      initials: 'BM',
      linkedin: null
    },
    {
      name: 'Julie Carrington, RN',
      title: 'Faculty – Culture of Excellence',
      credentials: 'RN',
      specialty: 'Nursing & Resuscitation Culture',
      bio: 'Julie Carrington, RN presents on the Culture of Excellence session during the Leadership Workshop. She examines the organizational and team culture factors that support high performance in cardiac arrest response, drawing on her clinical nursing experience to help teams build sustainable cultures of excellence.',
      image: null,
      initials: 'JC',
      linkedin: null
    },
    {
      name: 'Dr. Brian Sloane',
      title: 'Faculty – Training Documentation',
      credentials: 'MD',
      specialty: 'Emergency Medicine & EMS Education',
      bio: 'Dr. Brian Sloane presents "Beyond the Code: Training Documentation in Cardiac Arrest," exploring how robust documentation practices can drive continuous improvement in resuscitation training and patient care outcomes across EMS systems.',
      image: null,
      initials: 'BS',
      linkedin: null
    },
    {
      name: 'Dr. Stephen Rossiter',
      title: 'Faculty – Dual Sequential Defibrillation',
      credentials: 'MD',
      specialty: 'Advanced Resuscitation & Cardiac Electrophysiology',
      bio: 'Dr. Stephen Rossiter presents on Dual Sequential Defibrillation and Changing Axis techniques during the Leadership Workshop. He covers the evidence and clinical applications of these advanced defibrillation strategies in refractory ventricular fibrillation cardiac arrest cases.',
      image: null,
      initials: 'SR',
      linkedin: null
    },
    {
      name: 'Dr. Emily Andrada',
      title: 'Faculty – Pediatric Resuscitation',
      credentials: 'MD',
      specialty: 'Pediatric Emergency Medicine',
      bio: 'Dr. Emily Andrada presents on Pediatric Resuscitation during the Leadership Workshop. She provides expert guidance on the unique considerations and evidence-based approaches for managing pediatric cardiac arrest, helping EMS providers and hospital teams improve outcomes for critically ill children.',
      image: null,
      initials: 'EA',
      linkedin: null
    },
    {
      name: 'Captain Jim Ellis',
      title: 'Faculty – Community Engagement',
      credentials: 'Captain',
      specialty: 'Community Engagement & Bystander CPR',
      bio: 'Captain Jim Ellis presents "Community Engagement – Breaking Down Barriers" during the Leadership Workshop. He addresses strategies for expanding bystander CPR training, overcoming barriers to community participation, and building robust public-access defibrillation programs to improve cardiac arrest survival rates.',
      image: null,
      initials: 'JE',
      linkedin: null
    },
  ];

  const agendaItems = [
    // ─── DAY 1 – OCTOBER 5 | LEADERSHIP WORKSHOP ───────────────────────────
    {
      day: 1,
      time: '7:30 AM – 8:00 AM',
      title: 'Registration and Light Breakfast',
      speaker: '',
      description: 'Check in and receive conference materials. Network with fellow attendees over coffee and light refreshments.',
      type: 'registration'
    },
    {
      day: 1,
      time: '8:00 AM – 8:20 AM',
      title: 'Opening Remarks',
      speaker: 'Chief Nathaniel Hartinger & Douglas Brim',
      description: 'Welcome to the UC Davis Resuscitation Academy Leadership Workshop and overview of the two-day intensive training program.',
      type: 'Opening'
    },
    {
      day: 1,
      time: '8:20 AM – 8:30 AM',
      title: 'Overview',
      speaker: 'Captain Scott Hatcher',
      description: 'Overview of the day\'s agenda, learning objectives, and what to expect from the Leadership Workshop.',
      type: 'Opening'
    },
    {
      day: 1,
      time: '8:30 AM – 9:00 AM',
      title: '10 Steps to Improve Survival',
      speaker: 'Dr. Lisa Mills',
      description: 'Evidence-based strategies for improving out-of-hospital cardiac arrest (OHCA) survival through systematic quality improvement.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '9:00 AM – 9:50 AM',
      title: 'Science of CPR and Time/Quality',
      speaker: 'Dr. John Rose',
      description: 'Comprehensive overview of the scientific foundations of CPR, the physiological impact of time and quality on patient outcomes, and evidence-based resuscitation practices.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '9:50 AM – 10:00 AM',
      title: 'Break',
      speaker: '',
      description: 'Networking break with refreshments.',
      type: 'break'
    },
    {
      day: 1,
      time: '10:00 AM – 10:50 AM',
      title: 'Telephone CPR',
      speaker: 'Dr. Miranda Lewis',
      description: 'Introduction to dispatcher-assisted CPR (T-CPR), including science, protocols, best practices for training, and implementation strategies for emergency communication centers.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '10:50 AM – 11:20 AM',
      title: 'Measuring and Data',
      speaker: 'Captain Brian Morr',
      description: 'How to use data to drive quality improvement in cardiac arrest response — collection methods, key metrics, and strategies for sustained system improvement.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '11:20 AM – 12:00 PM',
      title: 'HP-CPR Demonstration',
      speaker: 'UC Davis Fire Department – Captain Scott Hatcher',
      description: 'Live demonstration of High-Performance CPR techniques by the UC Davis Fire Department, showcasing team coordination, role clarity, and real-time feedback methods.',
      type: 'demonstration'
    },
    {
      day: 1,
      time: '12:00 PM – 1:00 PM',
      title: 'Lunch',
      speaker: '',
      description: 'Catered lunch and networking opportunity with faculty and fellow attendees.',
      type: 'Lunch'
    },
    {
      day: 1,
      time: '1:00 PM – 1:30 PM',
      title: 'Culture of Excellence',
      speaker: 'Julie Carrington, RN',
      description: 'Exploring the organizational and team culture factors that enable high performance in cardiac arrest response and sustain long-term quality improvement.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '1:30 PM – 2:00 PM',
      title: 'Beyond the Code: Training Documentation in Cardiac Arrest',
      speaker: 'Dr. Brian Sloane',
      description: 'How robust training documentation practices can drive continuous improvement in resuscitation care and support accountability across EMS systems.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '2:00 PM – 2:10 PM',
      title: 'Break',
      speaker: '',
      description: 'Networking break with refreshments.',
      type: 'break'
    },
    {
      day: 1,
      time: '2:10 PM – 2:40 PM',
      title: 'Dual Sequential and Changing Axis Defibrillation',
      speaker: 'Dr. Stephen Rossiter',
      description: 'Evidence and clinical applications of dual sequential defibrillation and changing axis strategies for refractory ventricular fibrillation in cardiac arrest.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '2:40 PM – 3:00 PM',
      title: 'Pediatric Resuscitation',
      speaker: 'Dr. Emily Andrada',
      description: 'Key considerations and evidence-based approaches for managing pediatric cardiac arrest, including age-specific protocols and team communication strategies.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '3:00 PM – 3:10 PM',
      title: 'Break',
      speaker: '',
      description: 'Networking break with refreshments.',
      type: 'break'
    },
    {
      day: 1,
      time: '3:10 PM – 3:45 PM',
      title: 'Community Engagement – Breaking Down Barriers',
      speaker: 'Captain Jim Ellis',
      description: 'Strategies for expanding bystander CPR training, overcoming community barriers, and building strong public-access defibrillation programs to improve cardiac arrest survival.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '3:45 PM – 4:15 PM',
      title: 'System Assessment and Projects',
      speaker: 'All Faculty – Roam and Review Projects',
      description: 'Faculty-guided review of participant system assessment projects. Attendees receive individualized feedback and mentorship from faculty across the room.',
      type: 'Breakout'
    },
    {
      day: 1,
      time: '4:15 PM – 4:30 PM',
      title: 'Putting It All Together',
      speaker: 'Douglas Brim',
      description: 'Synthesizing the day\'s key themes and takeaways, and a preview of Day 2 workshops.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '4:30 PM – 4:40 PM',
      title: 'Day 1 Closing Remarks and Evaluations',
      speaker: 'Dr. Lisa Mills',
      description: 'Closing remarks for the Leadership Workshop. Participants complete Day 1 evaluations.',
      type: 'Feedback'
    },
    {
      day: 1,
      time: '4:40 PM – 5:30 PM',
      title: 'Networking Reception',
      speaker: '',
      description: 'Informal networking reception for attendees and faculty. Connect with peers and continue conversations from the day.',
      type: 'reception'
    },

    // ─── DAY 2 – OCTOBER 6 | HP-CPR WORKSHOP ───────────────────────────────
    {
      day: 2,
      time: '8:00 AM – 8:10 AM',
      title: 'Opening Remarks – Day 2',
      speaker: 'Dr. Lisa Mills',
      description: 'Welcome to Day 2 of the UC Davis Resuscitation Academy. Overview of the HP-CPR and T-CPR workshops.',
      type: 'Opening'
    },
    {
      day: 2,
      time: '8:10 AM – 8:25 AM',
      title: 'HP-CPR: Definitions and Introduction',
      speaker: 'Captain Scott Hatcher',
      description: 'Introduction to High-Performance CPR: core definitions, goals, and the evidence base for the HP-CPR framework.',
      type: 'lecture'
    },
    {
      day: 2,
      time: '8:25 AM – 8:35 AM',
      title: 'Module 1: Culture',
      speaker: 'Captain Scott Hatcher',
      description: 'Building a culture of high performance in resuscitation — leadership, accountability, and team dynamics.',
      type: 'lecture'
    },
    {
      day: 2,
      time: '8:35 AM – 8:55 AM',
      title: 'Module 2: Science of CPR',
      speaker: 'Captain Scott Hatcher',
      description: 'The physiological and scientific principles underlying effective CPR, including compression depth, rate, recoil, and minimizing interruptions.',
      type: 'lecture'
    },
    {
      day: 2,
      time: '8:55 AM – 9:10 AM',
      title: 'Module 3: HP-CPR Overview',
      speaker: 'Captain Scott Hatcher',
      description: 'Overview of the HP-CPR model: roles, responsibilities, choreography, and team coordination principles.',
      type: 'lecture'
    },
    {
      day: 2,
      time: '9:10 AM – 9:20 AM',
      title: 'Break',
      speaker: '',
      description: 'Networking break with refreshments.',
      type: 'break'
    },
    {
      day: 2,
      time: '9:20 AM – 9:30 AM',
      title: 'Module 4: Initial Assessment',
      speaker: 'Captain Scott Hatcher',
      description: 'Rapid, systematic approach to initial cardiac arrest assessment — recognition, activation, and setting up for high-performance resuscitation.',
      type: 'lecture'
    },
    {
      day: 2,
      time: '9:30 AM – 9:55 AM',
      title: 'Module 5: Chest Compressions',
      speaker: 'Captain Scott Hatcher',
      description: 'Hands-on instruction and practice focused on high-quality chest compressions — rate, depth, recoil, and rotation strategies.',
      type: 'lecture'
    },
    {
      day: 2,
      time: '9:55 AM – 10:10 AM',
      title: 'Module 6: Controlled Ventilations',
      speaker: 'Captain Scott Hatcher',
      description: 'Techniques for delivering controlled ventilations during cardiac arrest, minimizing interruptions to compressions and optimizing gas exchange.',
      type: 'lecture'
    },
    {
      day: 2,
      time: '10:10 AM – 10:30 AM',
      title: 'Module 7: Compressions and Ventilations',
      speaker: 'Captain Scott Hatcher',
      description: 'Integration of compressions and ventilations in the HP-CPR framework — timing, team coordination, and continuous feedback.',
      type: 'lecture'
    },
    {
      day: 2,
      time: '10:30 AM – 10:40 AM',
      title: 'Break',
      speaker: '',
      description: 'Networking break with refreshments.',
      type: 'break'
    },
    {
      day: 2,
      time: '10:40 AM – 10:55 AM',
      title: 'Module 8: Defibrillation Familiarization',
      speaker: 'Captain Scott Hatcher',
      description: 'AED and manual defibrillator familiarization — safe, efficient defibrillation integrated into the HP-CPR choreography.',
      type: 'lecture'
    },
    {
      day: 2,
      time: '10:55 AM – 11:10 AM',
      title: 'Module 9: Coordination and Communications',
      speaker: 'Captain Scott Hatcher',
      description: 'Closed-loop communication, team leadership, and role clarity to ensure seamless coordination during high-performance resuscitation.',
      type: 'lecture'
    },
    {
      day: 2,
      time: '11:10 AM – 11:55 AM',
      title: 'Module 10: Practice and Scenarios',
      speaker: 'Captain Scott Hatcher',
      description: 'Hands-on scenario-based practice applying all HP-CPR modules in simulated cardiac arrest cases with real-time coaching and feedback.',
      type: 'Breakout'
    },
    {
      day: 2,
      time: '11:55 AM – 12:00 PM',
      title: 'Break',
      speaker: '',
      description: 'Short break before Module 11.',
      type: 'break'
    },
    {
      day: 2,
      time: '12:00 PM – 12:30 PM',
      title: 'Module 11: ALS Integration',
      speaker: 'Captain Scott Hatcher',
      description: 'Integrating Advanced Life Support interventions into the HP-CPR framework — ALS role assignment, airway management, and medication delivery without disrupting compressions.',
      type: 'lecture'
    },
    {
      day: 2,
      time: '12:30 PM – 1:00 PM',
      title: 'Lunch',
      speaker: '',
      description: 'Catered lunch and networking opportunity.',
      type: 'Lunch'
    },
    {
      day: 2,
      time: '1:00 PM – 2:15 PM',
      title: 'HP-CPR Train the Trainer',
      speaker: 'Captain Scott Hatcher',
      description: 'Comprehensive Train-the-Trainer session equipping participants to deliver HP-CPR training in their own agencies — includes educational principles, facilitation strategies, and hands-on practice.',
      type: 'Breakout'
    },
    {
      day: 2,
      time: '2:15 PM – 2:30 PM',
      title: 'Closing Remarks and Evaluations',
      speaker: 'Captain Scott Hatcher & Dr. Lisa Mills',
      description: 'Closing remarks for the HP-CPR Workshop. Participants complete Day 2 evaluations and receive next steps for implementation.',
      type: 'Feedback'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Georgia Pro, Georgia, serif' }}>
      <header className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://images.squarespace-cdn.com/content/v1/5f74bfd9d36c8e051d674096/5345f179-5a1d-4115-a6fd-fdeb42b665f6/RA_Logo_Horizontal.png?format=500w" alt="Resuscitation Academy" className="h-12" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-semibold" style={{ color: '#404041' }}>October 5–6, 2026 · Davis, CA</p>
            </div>
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-2">
            {['Home', 'Agenda', 'Faculty', 'Forms', 'Resources', 'Future'].map((tab) => (
              <button key={tab} onClick={() => { setActiveTab(tab.toLowerCase()); setMobileMenuOpen(false); }} className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeTab === tab.toLowerCase() ? 'text-white' : 'hover:bg-gray-100'}`} style={activeTab === tab.toLowerCase() ? { backgroundColor: '#8B8EC5' } : {}}>{tab}</button>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg border shadow-sm p-4 sticky top-24">
              <nav className="space-y-1">
                {['Home', 'Agenda', 'Faculty', 'Forms', 'Resources', 'Future'].map((tab) => (
                  <button key={tab} onClick={() => setActiveTab(tab.toLowerCase())} className={`w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${activeTab === tab.toLowerCase() ? 'text-white' : 'hover:bg-gray-100'}`} style={activeTab === tab.toLowerCase() ? { backgroundColor: '#991B1E' } : { color: '#404041' }}>{tab}</button>
                ))}
              </nav>
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            {activeTab === 'home' && (
              <div className="space-y-6">
                <div className="text-white p-8 rounded-lg" style={{ background: 'linear-gradient(to right, #991B1E, #60628A)' }}>
                  <h1 className="text-3xl font-bold mb-2">UC Davis Resuscitation Academy</h1>
                  <p className="text-lg mb-2">October 5–6, 2026 · Davis, California</p>
                  <p className="text-gray-100 mb-4">Advancing excellence in emergency care through evidence-based education</p>
                  <button onClick={() => window.open(REGISTRATION_LINK, '_blank')} className="inline-flex items-center gap-2 px-6 py-3 bg-white font-semibold rounded-lg hover:opacity-90" style={{ color: '#991B1E' }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    Register Now
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg border shadow-sm p-6">
                    <h3 className="text-xl font-semibold mb-4" style={{ color: '#991B1E' }}>Event Details</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Schedule</p>
                        <p className="text-sm text-gray-600">Monday, October 5 – Leadership Workshop</p>
                        <p className="text-sm text-gray-600">Tuesday, October 6 – HP-CPR Workshop &amp; T-CPR Workshop</p>
                      </div>
                      <div>
                        <p className="font-semibold">Venue</p>
                        <p className="text-sm text-gray-600">UC Davis Conference Center</p>
                        <p className="text-sm text-gray-600">550 Alumni Lane</p>
                        <p className="text-sm text-gray-600">Davis, CA 95616</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border shadow-sm p-6">
                    <h3 className="text-xl font-semibold mb-4">Quick Access</h3>
                    <div className="space-y-2">
                      <button onClick={() => window.open(REGISTRATION_LINK, '_blank')} className="w-full text-left px-4 py-2 rounded border text-white hover:opacity-90" style={{ backgroundColor: '#991B1E' }}>Register for the Event</button>
                      <button onClick={() => setActiveTab('agenda')} className="w-full text-left px-4 py-2 rounded border hover:bg-gray-50">View Full Agenda</button>
                      <button onClick={() => setActiveTab('faculty')} className="w-full text-left px-4 py-2 rounded border hover:bg-gray-50">Meet Our Faculty</button>
                      <button onClick={() => setActiveTab('resources')} className="w-full text-left px-4 py-2 rounded border hover:bg-gray-50">Training Resources</button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#991B1E' }}>Logistics Information</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1">Registration</h4>
                      <p className="text-sm text-gray-600">Day 1 registration begins at 7:30 AM with a light breakfast. Please arrive early to check in and receive your conference materials.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Venue</h4>
                      <p className="text-sm text-gray-600">UC Davis Conference Center, 550 Alumni Lane, Davis, CA 95616. The Conference Center offers professional training facilities with spaces for both plenary sessions and hands-on workshops.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Parking</h4>
                      <p className="text-sm text-gray-600">The closest visitor parking options to the Conference Center are the <strong>South Entry Parking Structure</strong> and <strong>Visitor Parking Lots 1 and 2</strong>. Participants will need to purchase a parking pass. A direct parking purchase link will be sent to registered attendees ahead of the event.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Meals</h4>
                      <p className="text-sm text-gray-600">Light breakfast provided Day 1 at 7:30 AM. Lunch provided both days (Day 1: 12:00 PM – 1:00 PM; Day 2: 12:30 PM – 1:00 PM).</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'agenda' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Conference Agenda</h2>
                  <p className="text-gray-600 mb-2">Two days of intensive training, hands-on workshops, and collaborative learning</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="text-xs font-semibold px-3 py-1 text-white rounded-full" style={{ backgroundColor: '#8B8EC5' }}>Day 1 – Oct 5: Leadership Workshop</span>
                    <span className="text-xs font-semibold px-3 py-1 text-white rounded-full" style={{ backgroundColor: '#60628A' }}>Day 2 – Oct 6: HP-CPR &amp; T-CPR Workshop</span>
                  </div>
                </div>
                {agendaItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg border shadow-sm p-6 border-l-4" style={{ borderLeftColor: item.day === 1 ? '#8B8EC5' : '#60628A' }}>
                    <div className="mb-3">
                      <span className="text-xs font-semibold px-2 py-1 text-white rounded" style={{ backgroundColor: item.day === 1 ? '#8B8EC5' : '#60628A' }}>
                        Day {item.day} – Oct {item.day === 1 ? '5' : '6'} · {item.day === 1 ? 'Leadership Workshop' : 'HP-CPR & T-CPR Workshop'}
                      </span>
                      {item.type !== 'registration' && item.type !== 'break' && item.type !== 'Lunch' && item.type !== 'reception' && (
                        <span className="ml-2 text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: '#F0F0F0', color: '#404041' }}>{item.type}</span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{item.time}</p>
                    {item.speaker && <p className="text-sm font-semibold mb-3" style={{ color: '#991B1E' }}>{item.speaker}</p>}
                    <p className="text-sm text-gray-600">{item.description}</p>
                    {item.type !== 'registration' && item.type !== 'break' && item.type !== 'Lunch' && item.type !== 'reception' && (
                      <button onClick={() => window.open(SURVEY_MONKEY_FEEDBACK, '_blank')} className="mt-4 px-4 py-2 text-sm border rounded hover:bg-gray-50" style={{ borderColor: '#991B1E', color: '#991B1E' }}>Provide Feedback</button>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'faculty' && (
              <div className="space-y-6">
                {selectedFaculty ? (
                  <div>
                    <button onClick={() => setSelectedFaculty(null)} className="mb-4 px-4 py-2 text-sm border rounded hover:bg-gray-50" style={{ borderColor: '#991B1E', color: '#991B1E' }}>← Back to Faculty Directory</button>
                    <div className="bg-white rounded-lg border shadow-sm p-6">
                      <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                        {selectedFaculty.image ? (
                          <img src={selectedFaculty.image} alt={selectedFaculty.name} className="w-32 h-32 rounded-lg object-cover" />
                        ) : (
                          <div className="w-32 h-32 rounded-lg flex items-center justify-center text-white text-3xl font-semibold" style={{ backgroundColor: '#8B8EC5' }}>{selectedFaculty.initials}</div>
                        )}
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold mb-2">{selectedFaculty.name}</h2>
                          {selectedFaculty.credentials && <p className="text-lg text-gray-600 mb-2">{selectedFaculty.credentials}</p>}
                          <p className="font-semibold mb-1" style={{ color: '#991B1E' }}>{selectedFaculty.title}</p>
                          <p className="text-gray-600 mb-3">{selectedFaculty.specialty}</p>
                          {selectedFaculty.linkedin && (
                            <a href={selectedFaculty.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm px-3 py-1 border rounded hover:bg-gray-50" style={{ borderColor: '#991B1E', color: '#991B1E' }}>
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                              View LinkedIn Profile
                            </a>
                          )}
                        </div>
                      </div>
                      <div><h3 className="text-lg font-semibold mb-3">Biography</h3><p className="text-gray-600 leading-relaxed">{selectedFaculty.bio}</p></div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Faculty Directory</h2>
                      <p className="text-gray-600 mb-6">Meet the expert instructors and presenters for the UC Davis Resuscitation Academy</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {faculty.map((member, index) => (
                        <div key={index} onClick={() => setSelectedFaculty(member)} className="bg-white rounded-lg border shadow-sm p-6 border-l-4 cursor-pointer hover:shadow-lg transition-shadow" style={{ borderLeftColor: '#8B8EC5' }}>
                          <div className="flex flex-col items-center text-center">
                            {member.image ? (
                              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4" />
                            ) : (
                              <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-xl font-semibold mb-4" style={{ backgroundColor: '#8B8EC5' }}>{member.initials}</div>
                            )}
                            <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                            {member.credentials && <p className="text-sm text-gray-600 mb-1">{member.credentials}</p>}
                            <p className="text-sm font-semibold mb-1" style={{ color: '#991B1E' }}>{member.title}</p>
                            <p className="text-sm text-gray-600">{member.specialty}</p>
                            <button className="mt-4 text-sm hover:underline" style={{ color: '#991B1E' }}>View Full Bio →</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {activeTab === 'forms' && (
              <div className="space-y-6">
                <div><h2 className="text-2xl font-bold mb-4">Forms &amp; Feedback</h2><p className="text-gray-600 mb-6">Register for the event and share your feedback to help us improve future conferences</p></div>

                <div className="bg-white rounded-lg border-2 shadow-sm p-6" style={{ borderColor: '#991B1E' }}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-xs font-semibold px-2 py-1 text-white rounded" style={{ backgroundColor: '#991B1E' }}>Registration</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Event Registration</h3>
                  <p className="text-sm text-gray-600 mb-4">Register for the UC Davis Resuscitation Academy – October 5–6, 2026. Spots are limited; please register early to secure your place.</p>
                  <button onClick={() => window.open(REGISTRATION_LINK, '_blank')} className="w-full px-4 py-3 text-white rounded hover:opacity-90 flex items-center justify-center gap-2 font-semibold" style={{ backgroundColor: '#991B1E' }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    Register Now
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg border shadow-sm p-6 border-l-4" style={{ borderLeftColor: '#8B8EC5' }}>
                    <h3 className="text-xl font-semibold mb-2">Session Feedback</h3>
                    <p className="text-sm text-gray-600 mb-4">Provide feedback for individual sessions to help improve the program</p>
                    <button onClick={() => window.open(SURVEY_MONKEY_FEEDBACK, '_blank')} className="w-full px-4 py-2 text-white rounded hover:opacity-90 flex items-center justify-center gap-2" style={{ backgroundColor: '#991B1E' }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      Open Session Feedback Form
                    </button>
                  </div>
                  <div className="bg-white rounded-lg border shadow-sm p-6 border-l-4" style={{ borderLeftColor: '#8B8EC5' }}>
                    <h3 className="text-xl font-semibold mb-2">Project Submission</h3>
                    <p className="text-sm text-gray-600 mb-4">Submit your team resuscitation improvement project via Microsoft Forms</p>
                    <button onClick={() => window.open(PROJECT_SUBMISSION, '_blank')} className="w-full px-4 py-2 text-white rounded hover:opacity-90 flex items-center justify-center gap-2" style={{ backgroundColor: '#991B1E' }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      Open Project Submission Form
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg border shadow-sm p-6 border-l-4" style={{ borderLeftColor: '#991B1E' }}>
                  <h3 className="text-xl font-semibold mb-2">Overall Conference Feedback</h3>
                  <p className="text-sm text-gray-600 mb-4">Share your overall experience with the UC Davis Resuscitation Academy</p>
                  <button onClick={() => window.open(SURVEY_MONKEY_FEEDBACK, '_blank')} className="w-full px-4 py-2 text-white rounded hover:opacity-90 flex items-center justify-center gap-2" style={{ backgroundColor: '#991B1E' }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    Open Conference Feedback Form
                  </button>
                </div>

                <div className="rounded-lg p-6" style={{ backgroundColor: '#D9D9E6' }}>
                  <h3 className="text-lg font-semibold mb-2">About Our Forms</h3>
                  <p className="text-sm" style={{ color: '#404041' }}>
                    <strong>Registration:</strong> Hosted on Google Forms. Register early as space is limited.<br />
                    <strong>Session Feedback:</strong> Hosted on Microsoft Forms for quick and easy session evaluations.<br />
                    <strong>Project Submission:</strong> Hosted on Microsoft Forms for secure project documentation and team information.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Tools &amp; Resources</h2>
                  <p className="text-gray-600 mb-6">Essential training materials and reference guides from Resuscitation Academy</p>
                </div>

                <div className="bg-white rounded-lg border shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#991B1E' }}>Resuscitation Academy Toolkits</h3>
                  <p className="text-sm text-gray-600 mb-6">Downloadable toolkits for improving cardiac arrest survival rates</p>

                  <div className="space-y-4">
                    <a
                      href="https://mycares.net/sitepages/uploads/2018/Resuscitation%20Academy%20TCPR%20Toolkit.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 border-2 rounded-lg hover:shadow-md transition-shadow"
                      style={{ borderColor: '#8B8EC5' }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: '#991B1E' }}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1" style={{ color: '#991B1E' }}>T-CPR Toolkit</h4>
                          <p className="text-sm text-gray-600 mb-2">Telecommunicator CPR implementation guide with protocols, training materials, and quality improvement resources</p>
                          <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: '#F0F0F0', color: '#404041' }}>PDF Download</span>
                        </div>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>

                    <a
                      href="https://globalresuscitationalliance.org/downloads/ebook/10_steps_2019.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 border-2 rounded-lg hover:shadow-md transition-shadow"
                      style={{ borderColor: '#8B8EC5' }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: '#991B1E' }}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1" style={{ color: '#991B1E' }}>10 Steps to Improve OHCA Survival</h4>
                          <p className="text-sm text-gray-600 mb-2">Evidence-based strategies eBook for improving out-of-hospital cardiac arrest outcomes</p>
                          <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: '#F0F0F0', color: '#404041' }}>PDF Download</span>
                        </div>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>

                    <a
                      href="https://www.resuscitationacademy.org/toolkits"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 border-2 rounded-lg hover:shadow-md transition-shadow"
                      style={{ borderColor: '#60628A' }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: '#60628A' }}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1" style={{ color: '#60628A' }}>View All Toolkits</h4>
                          <p className="text-sm text-gray-600 mb-2">Browse the complete collection of Resuscitation Academy toolkits and resources</p>
                          <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: '#F0F0F0', color: '#404041' }}>Visit Website</span>
                        </div>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg border shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#991B1E' }}>Additional Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <span className="text-xs font-semibold px-2 py-1 text-white rounded" style={{ backgroundColor: '#8B8EC5' }}>CPR Protocols</span>
                      <h4 className="font-semibold mt-2 mb-1">High-Performance CPR Checklist</h4>
                      <p className="text-sm text-gray-600">Essential elements for HP-CPR implementation</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <span className="text-xs font-semibold px-2 py-1 text-white rounded" style={{ backgroundColor: '#8B8EC5' }}>Team Communication</span>
                      <h4 className="font-semibold mt-2 mb-1">Debriefing Framework</h4>
                      <p className="text-sm text-gray-600">Structured approach to post-event debriefing</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg p-6" style={{ backgroundColor: '#D9D9E6' }}>
                  <h3 className="text-lg font-semibold mb-2">About These Resources</h3>
                  <p className="text-sm" style={{ color: '#404041' }}>
                    These toolkits are developed by Resuscitation Academy to help EMS systems, hospitals, and communities improve cardiac arrest survival rates through evidence-based practices and quality improvement initiatives.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'future' && (
              <div className="space-y-6">
                <div><h2 className="text-2xl font-bold mb-4">Future Conferences</h2><p className="text-gray-600 mb-6">Join us for upcoming resuscitation training courses</p></div>
                <div className="bg-white rounded-lg border-2 shadow-sm p-6" style={{ borderColor: '#991B1E' }}>
                  <span className="text-xs font-semibold px-2 py-1 text-white rounded" style={{ backgroundColor: '#991B1E' }}>Save the Date</span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">Resuscitation Academy 2027</h3>
                  <p className="text-sm text-gray-600 mb-4">Join us for the next Resuscitation Academy intensive training course. Two days of expert-led sessions, hands-on workshops, and networking with resuscitation professionals from across the country.</p>
                  <p className="text-sm text-gray-600 mb-4">Dates and location to be announced</p>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 text-white rounded hover:opacity-90" style={{ backgroundColor: '#991B1E' }}>Get Notified</button>
                    <button className="px-4 py-2 border rounded hover:bg-gray-50" style={{ borderColor: '#991B1E', color: '#991B1E' }}>Learn More</button>
                  </div>
                </div>
                <div className="bg-white rounded-lg border shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-4">About Resuscitation Academy</h3>
                  <p className="text-sm text-gray-600 mb-4">Resuscitation Academy is a premier training program dedicated to improving out-of-hospital cardiac arrest survival through evidence-based education, quality improvement, and collaborative learning.</p>
                  <div>
                    <h4 className="font-semibold mb-2">What Makes Us Different</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2"><span style={{ color: '#991B1E' }}>✔</span><span>Evidence-based curriculum developed by leading resuscitation experts</span></li>
                      <li className="flex items-start gap-2"><span style={{ color: '#991B1E' }}>✔</span><span>Hands-on training with real-world applications</span></li>
                      <li className="flex items-start gap-2"><span style={{ color: '#991B1E' }}>✔</span><span>Ongoing mentorship and project support</span></li>
                      <li className="flex items-start gap-2"><span style={{ color: '#991B1E' }}>✔</span><span>Network of alumni implementing life-saving improvements nationwide</span></li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-lg border shadow-sm p-6 border-l-4" style={{ borderLeftColor: '#8B8EC5' }}>
                  <h3 className="text-xl font-semibold mb-2">Stay Informed</h3>
                  <p className="text-sm text-gray-600 mb-4">Get notified about upcoming courses and special events</p>
                  <div className="space-y-4">
                    <div><label className="block text-sm font-medium mb-2">Email Address</label><input type="email" placeholder="your.email@example.com" className="w-full px-3 py-2 border rounded" /></div>
                    <div className="flex items-center gap-2"><input type="checkbox" id="newsletter" className="w-4 h-4" /><label htmlFor="newsletter" className="text-sm">I agree to receive updates about future courses and events</label></div>
                    <button className="w-full px-4 py-2 text-white rounded hover:opacity-90" style={{ backgroundColor: '#991B1E' }}>Subscribe to Updates</button>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-40 shadow-lg pb-safe">
        <div className="flex justify-around">
          {['home', 'agenda', 'faculty', 'forms'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className="flex flex-col items-center gap-1 py-3 px-2 flex-1" style={{ color: activeTab === tab ? '#991B1E' : '#404041' }}>
              <span className="text-xs font-medium capitalize">{tab}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default ResuscitationAcademyApp;
