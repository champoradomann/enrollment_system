// Data for the application
const subjects = [
  {
    id: 1,
    code: 'CS101',
    name: 'Introduction to Programming',
    description: 'This course introduces the fundamental concepts of programming using Python. Students will learn about variables, data types, control structures, functions, and basic algorithms.',
    units: 3,
    department: 'CS',
    type: 'major',
    prerequisites: [],
    price: 3500,
    instructors: [
      { 
        id: 1, 
        name: 'Dr. John Smith', 
        schedule: 'Mon 8:30 AM - 11:00 AM, Tue 8:30 AM - 11:00 AM', // Multiple schedules
        rating: 4.8, 
        room: 'Room 301', 
        slots: 30,
        enrolled: 25, 
        specialization: 'Programming Languages', 
        bio: 'PhD in Computer Science with 10 years of teaching experience', 
        courses: ['CS101', 'CS201', 'CS301'] 
      },
      { id: 2, name: 'Prof. Maria Garcia', schedule: 'TTh 1:00-2:30 PM', rating: 4.5, room: 'Room 302', slots: 25, enrolled: 10, specialization: 'Software Engineering', bio: 'Industry professional with 15 years of experience', courses: ['CS101', 'CS401'] }
    ]
  },
  {
    id: 2,
    code: 'CS201',
    name: 'Data Structures and Algorithms',
    description: 'This course covers fundamental data structures and algorithms. Topics include arrays, linked lists, stacks, queues, trees, graphs, sorting, searching, and algorithm analysis.',
    units: 4,
    department: 'CS',
    type: 'major',
    prerequisites: ['CS101'],
    price: 4000,
    instructors: [
      { id: 3, name: 'Dr. Robert Johnson', schedule: 'MWF 11:00-12:30 PM', rating: 4.7, room: 'Room 303', slots: 30, enrolled: 28, specialization: 'Algorithms', bio: 'Published researcher in algorithm optimization', courses: ['CS201', 'CS401'] },
      { id: 4, name: 'Prof. Emily Chen', schedule: 'TTh 3:00-4:30 PM', rating: 4.6, room: 'Room 304', slots: 25, enrolled: 15, specialization: 'Data Structures', bio: 'Former Google engineer with expertise in efficient data structures', courses: ['CS201', 'CS301'] }
    ]
  },
  {
    id: 3,
    code: 'IT150',
    name: 'Database Management Systems',
    description: 'This course introduces the concepts of database design and management. Students will learn about relational databases, SQL, normalization, and database administration.',
    units: 3,
    department: 'IT',
    type: 'major',
    prerequisites: ['CS101'],
    price: 3500,
    instructors: [
      { id: 5, name: 'Dr. Sarah Williams', schedule: 'MWF 2:00-3:30 PM', rating: 4.6, room: 'Room 201', slots: 35, enrolled: 20, specialization: 'Database Systems', bio: 'Database architect with experience in Oracle and MySQL', courses: ['IT150', 'IT350'] },
      { id: 6, name: 'Prof. David Lee', schedule: 'TTh 9:00-10:30 AM', rating: 4.3, room: 'Room 202', slots: 30, enrolled: 30, specialization: 'Data Management', bio: 'Former database administrator for major tech companies', courses: ['IT150', 'IT250'] }
    ]
  },
  {
    id: 4,
    code: 'CS301',
    name: 'Object-Oriented Programming',
    description: 'This course focuses on object-oriented programming concepts using Java. Topics include classes, objects, inheritance, polymorphism, encapsulation, and interfaces.',
    units: 4,
    department: 'CS',
    type: 'major',
    prerequisites: ['CS201'],
    price: 4000,
    instructors: [
      { id: 7, name: 'Dr. Michael Brown', schedule: 'MWF 8:00-9:30 AM', rating: 4.4, room: 'Room 303', slots: 25, enrolled: 10, specialization: 'Object-Oriented Design', bio: 'Specializes in software architecture and design patterns', courses: ['CS301', 'CS401'] },
      { id: 8, name: 'Prof. Jennifer Kim', schedule: 'TTh 11:00-12:30 PM', rating: 4.7, room: 'Room 304', slots: 25, enrolled: 22, specialization: 'Java Programming', bio: 'Java certified instructor with industry experience', courses: ['CS101', 'CS301'] }
    ]
  },
  {
    id: 5,
    code: 'ARTS101',
    name: 'Digital Illustration',
    description: 'This course introduces students to digital illustration techniques using industry-standard software. Students will learn about digital drawing, coloring, and composition.',
    units: 3,
    department: 'ARTS',
    type: 'major',
    prerequisites: [],
    price: 3800,
    instructors: [
      { id: 9, name: 'Prof. Alex Turner', schedule: 'MWF 1:00-2:30 PM', rating: 4.9, room: 'Art Lab 1', slots: 20, enrolled: 18, specialization: 'Digital Art', bio: 'Professional illustrator with work featured in major publications', courses: ['ARTS101', 'ARTS201'] },
      { id: 10, name: 'Dr. Sophia Martinez', schedule: 'TTh 4:00-5:30 PM', rating: 4.8, room: 'Art Lab 2', slots: 20, enrolled: 15, specialization: 'Illustration', bio: 'Award-winning digital artist with industry experience', courses: ['ARTS101', 'ARTS301'] }
    ]
  },
  {
    id: 6,
    code: 'ARTS201',
    name: 'Animation Fundamentals',
    description: 'This course covers the principles of animation and motion design. Students will learn about keyframing, timing, spacing, and creating compelling animated sequences.',
    units: 4,
    department: 'ARTS',
    type: 'major',
    prerequisites: ['ARTS101'],
    price: 4200,
    instructors: [
      { id: 11, name: 'Prof. Daniel Wilson', schedule: 'MWF 10:00-11:30 AM', rating: 4.6, room: 'Animation Studio 1', slots: 15, enrolled: 12, specialization: 'Animation', bio: 'Former animator at Pixar with credits on major films', courses: ['ARTS201', 'ARTS301'] },
      { id: 12, name: 'Dr. Olivia Taylor', schedule: 'TTh 2:00-3:30 PM', rating: 4.5, room: 'Animation Studio 2', slots: 15, enrolled: 10, specialization: 'Motion Design', bio: 'PhD in Digital Arts with focus on motion graphics', courses: ['ARTS101', 'ARTS201'] }
    ]
  },
  {
    id: 7,
    code: 'GAME101',
    name: 'Introduction to Game Design',
    description: 'This course introduces the fundamental concepts of game design. Students will learn about game mechanics, level design, player psychology, and game prototyping.',
    units: 3,
    department: 'GAME',
    type: 'major',
    prerequisites: [],
    price: 3800,
    instructors: [
      { id: 13, name: 'Dr. James Anderson', schedule: 'MWF 3:00-4:30 PM', rating: 4.7, room: 'Game Lab 1', slots: 25, enrolled: 20, specialization: 'Game Design', bio: 'Game designer with multiple published titles', courses: ['GAME101', 'GAME201'] },
      { id: 14, name: 'Prof. Emma Wright', schedule: 'TTh 10:00-11:30 AM', rating: 4.8, room: 'Game Lab 2', slots: 25, enrolled: 15, specialization: 'Player Experience', bio: 'Specializes in user experience and player psychology', courses: ['GAME101', 'GAME301'] }
    ]
  },
  {
    id: 8,
    code: 'GE101',
    name: 'English Communication',
    description: 'This course develops effective communication skills in English. Students will learn about writing, speaking, and critical thinking in academic and professional contexts.',
    units: 3,
    department: 'GE',
    type: 'gened',
    prerequisites: [],
    price: 3000,
    instructors: [
      { id: 15, name: 'Prof. William Parker', schedule: 'MWF 9:00-10:30 AM', rating: 4.5, room: 'Room 101', slots: 40, enrolled: 35, specialization: 'Communication', bio: 'Published author with expertise in technical writing', courses: ['GE101', 'GE201'] },
      { id: 16, name: 'Dr. Olivia Thompson', schedule: 'TTh 1:00-2:30 PM', rating: 4.7, room: 'Room 102', slots: 40, enrolled: 30, specialization: 'English Literature', bio: 'PhD in English with focus on modern communication', courses: ['GE101', 'GE301'] }
    ]
  },
  {
    id: 9,
    code: 'GE102',
    name: 'Mathematics in the Modern World',
    description: 'This course explores mathematical concepts and their applications in modern society. Topics include logic, statistics, financial mathematics, and problem-solving.',
    units: 3,
    department: 'GE',
    type: 'gened',
    prerequisites: [],
    price: 3000,
    instructors: [
      { id: 17, name: 'Dr. Benjamin Adams', schedule: 'MWF 11:00-12:30 PM', rating: 4.6, room: 'Room 103', slots: 40, enrolled: 38, specialization: 'Applied Mathematics', bio: 'PhD in Mathematics with research in real-world applications', courses: ['GE102', 'GE202'] },
      { id: 18, name: 'Prof. Sophia Wilson', schedule: 'TTh 3:00-4:30 PM', rating: 4.4, room: 'Room 104', slots: 40, enrolled: 25, specialization: 'Statistics', bio: 'Former statistician with experience in data analysis', courses: ['GE102', 'GE302'] }
    ]
  }
];

// Application state
let cart = [];
let selectedInstructor = null;
let currentSubject = null;
let completedSubjects = [
  //{ code: 'CS101', grade: '4.0' },//
  { code: 'ARTS101', grade: '3.75' },
  { code: 'GAME101', grade: '3.25' },
  { code: 'GE101', grade: '3.0' }
]; // Simulating completed subjects for prerequisites
let currentlyTakingSubjects = []; // Subjects currently being taken
const MAX_UNITS = 21; // Maximum units allowed for enrollment
let hasCompletedPayment = false; // Flag to track if payment has been completed

// DOM Elements
const tabs = document.querySelectorAll('nav a');
const tabContents = document.querySelectorAll('.tab-content');
const subjectSearch = document.getElementById('subject-search');
const departmentFilter = document.getElementById('filter-department');
const subjectTypeFilter = document.getElementById('filter-type');
const prerequisiteSearch = document.getElementById('prerequisite-search');
const instructorSearch = document.getElementById('instructor-search');
const specializationFilter = document.getElementById('filter-specialization');
const subjectsContainer = document.querySelector('.subjects-container');
const prerequisitesContainer = document.querySelector('.prerequisites-list');
const instructorsDashboard = document.querySelector('.instructors-dashboard');
const modal = document.getElementById('subject-modal');
const instructorModal = document.getElementById('instructor-modal');
const closeModal = document.querySelector('.close');
const closeInstructorModal = document.querySelector('.instructor-close');
const modalTitle = document.getElementById('modal-subject-title');
const modalDescription = document.getElementById('modal-subject-description');
const prerequisitesList = document.getElementById('prerequisites-list');
const instructorsList = document.getElementById('modal-instructors').querySelector('.instructors-list');
const enrollButton = document.getElementById('enroll-button');
const cartItems = document.querySelector('.cart-items');
const totalUnits = document.getElementById('total-units');
const headerTotalUnits = document.getElementById('header-total-units');
const unitsProgressBar = document.getElementById('units-progress-bar');
const totalAmount = document.getElementById('total-amount');
const checkoutButton = document.getElementById('checkout-button');
const dashboardCheckout = document.getElementById('dashboard-checkout');
const paymentModal = document.getElementById('payment-modal');
const paymentClose = document.querySelector('.payment-close');
const paymentSubjects = document.getElementById('payment-subjects');
const paymentUnits = document.getElementById('payment-units');
const paymentAmount = document.getElementById('payment-amount');
const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
const paymentDetails = document.querySelectorAll('.payment-details');
const completePayment = document.getElementById('complete-payment');
const successModal = document.getElementById('success-modal');
const referenceNumber = document.getElementById('reference-number');
const closeSuccess = document.getElementById('close-success');
const completedSubjectsContainer = document.getElementById('completed-subjects');
const enrollmentTableBody = document.getElementById('enrollment-table-body');
const noEnrollmentMessage = document.getElementById('no-enrollment-message');
const enrolledCount = document.getElementById('enrolled-count');
const completedCount = document.getElementById('completed-count');
const summaryUnits = document.getElementById('summary-units');
const summarySubjects = document.getElementById('summary-subjects');
const summaryAmount = document.getElementById('summary-amount');

// Initialize the application
function init() {
  // Render subjects, prerequisites, and instructors
  renderSubjects();
  renderPrerequisites();
  renderCompletedSubjects();
  renderInstructors();
  updateDashboard();
  
  // Add event listeners
  addEventListeners();

    // Display the logged-in user's email
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      const userEmailElement = document.getElementById('user-email');
      userEmailElement.textContent = `Welcome back!: ${userEmail}`;
    }
}

// Render available subjects
function renderSubjects(searchTerm = '', department = '', type = '') {
  subjectsContainer.innerHTML = '';
  
  // If payment has been completed, show a message and return
  if (hasCompletedPayment) {
    subjectsContainer.innerHTML = '<div class="empty-message">Enrollment period has ended. You have successfully enrolled in your selected subjects.</div>';
    return;
  }
  
  const filteredSubjects = subjects.filter(subject => {
    const matchesSearch = subject.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          subject.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = department === '' || subject.department === department;
    const matchesType = type === '' || subject.type === type;
    const isAvailable = checkPrerequisites(subject.prerequisites);
    const isNotCompleted = !completedSubjects.some(completed => completed.code === subject.code);
    const isNotCurrentlyTaking = !currentlyTakingSubjects.includes(subject.code);
    
    return matchesSearch && matchesDepartment && matchesType && isAvailable && isNotCompleted && isNotCurrentlyTaking;
  });
  
  if (filteredSubjects.length === 0) {
    subjectsContainer.innerHTML = '<div class="empty-message">No available subjects found matching your criteria.</div>';
    return;
  }
  
  filteredSubjects.forEach(subject => {
    const subjectCard = document.createElement('div');
    subjectCard.className = 'subject-card';
    subjectCard.dataset.id = subject.id;
    
    // Check if subject is already in cart
    const isInCart = cart.some(item => item.subject.id === subject.id);
    
    subjectCard.innerHTML = `
      <h3>${subject.name}</h3>
      <div class="subject-code">${subject.code}</div>
      <p>${subject.description.substring(0, 100)}...</p>
      <div class="subject-details">
        <span class="units">${subject.units} Units</span>
        <span class="department">${getDepartmentName(subject.department)}</span>
        <span class="type">${subject.type === 'major' ? 'Major' : 'Gen Ed'}</span>
      </div>
    `;
    
    if (!isInCart) {
      subjectCard.addEventListener('click', () => openSubjectModal(subject));
    } else {
      subjectCard.classList.add('in-cart');
      subjectCard.innerHTML += '<div class="in-cart-badge">Enrolling</div>';
    }
    
    subjectsContainer.appendChild(subjectCard);
  });
}

// Render instructors dashboard
function renderInstructors(searchTerm = '', specialization = '') {
  instructorsDashboard.innerHTML = '';
  
  // Create a unique list of instructors from all subjects
  const allInstructors = [];
  const instructorIds = new Set();
  
  subjects.forEach(subject => {
    subject.instructors.forEach(instructor => {
      if (!instructorIds.has(instructor.id)) {
        instructorIds.add(instructor.id);
        allInstructors.push({
          ...instructor,
          subjects: [subject]
        });
      } else {
        // Add subject to existing instructor
        const existingInstructor = allInstructors.find(i => i.id === instructor.id);
        if (existingInstructor && !existingInstructor.subjects.some(s => s.id === subject.id)) {
          existingInstructor.subjects.push(subject);
        }
      }
    });
  });
  
  // Filter instructors based on search and specialization
  const filteredInstructors = allInstructors.filter(instructor => {
    const matchesSearch = searchTerm === '' || 
                          instructor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialization = specialization === '' || 
                                 instructor.specialization === specialization;
    
    return matchesSearch && matchesSpecialization;
  });
  
  if (filteredInstructors.length === 0) {
    instructorsDashboard.innerHTML = '<div class="empty-message">No instructors found matching your criteria.</div>';
    return;
  }
  
  filteredInstructors.forEach(instructor => {
    const instructorCard = document.createElement('div');
    instructorCard.className = 'instructor-dashboard-card';
    instructorCard.dataset.id = instructor.id;
    
    // Generate star rating
    const stars = generateStarRating(instructor.rating);
    
    // Get course codes for this instructor
    const courseCodes = instructor.courses || [];
    
    instructorCard.innerHTML = `
      <h3>${instructor.name}</h3>
      <div class="instructor-specialization">${instructor.specialization || 'General'}</div>
      <div class="instructor-rating">
        <div class="stars">${stars}</div>
        <span class="rating-value">${instructor.rating.toFixed(1)}</span>
      </div>
      <div>${instructor.schedule}</div>
      <div class="instructor-room">${instructor.room}</div>
      <div class="instructor-courses">
        <h4>Courses:</h4>
        <div class="course-tags">
          ${courseCodes.map(code => `<span class="course-tag">${code}</span>`).join('')}
        </div>
      </div>
    `;
    
    instructorCard.addEventListener('click', () => openInstructorModal(instructor));
    
    instructorsDashboard.appendChild(instructorCard);
  });
}

// Open instructor modal
function openInstructorModal(instructor) {
  // Set modal content
  document.getElementById('modal-instructor-name').textContent = instructor.name;
  document.getElementById('modal-instructor-specialization').textContent = instructor.specialization || 'General';
  document.getElementById('modal-instructor-bio').textContent = instructor.bio || 'No biography available.';
  document.getElementById('modal-instructor-schedule').textContent = instructor.schedule;
  document.getElementById('modal-instructor-room').textContent = instructor.room;
  document.getElementById('modal-instructor-enrolled').textContent = instructor.enrolled;
  document.getElementById('modal-instructor-slots').textContent = instructor.slots - instructor.enrolled;

  // Generate star rating
  const stars = generateStarRating(instructor.rating);
  document.getElementById('modal-instructor-rating').innerHTML = `
    <div class="stars">${stars}</div>
    <span class="rating-value">${instructor.rating.toFixed(1)}</span>
  `;

  // Generate courses list
  const coursesList = document.getElementById('instructor-courses-list');
  coursesList.innerHTML = '';

  if (instructor.courses && instructor.courses.length > 0) {
    instructor.courses.forEach(code => {
      const li = document.createElement('li');
      li.textContent = code;
      coursesList.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = 'No courses available';
    coursesList.appendChild(li);
  }

  // Show modal
  instructorModal.style.display = 'block';
}

// Render completed subjects
function renderCompletedSubjects() {
  completedSubjectsContainer.innerHTML = '';

  // Group completed subjects by term
  const groupedSubjects = {
    '1st Year 1st Term': [],
    '1st Year 2nd Term': [],
    '1st Year 3rd Term': [],
    '2nd Year 1st Term': [],
    '2nd Year 2nd Term': [],
    '2nd Year 3rd Term': [],
    // Add more terms as needed
  };

  // Simulate completed subjects for each term
  completedSubjects.forEach((completed, index) => {
    const subject = subjects.find(s => s.code === completed.code);
    if (subject) {
      // Assign subjects to terms (for demonstration purposes)
      if (index < 3) {
        groupedSubjects['1st Year 1st Term'].push({ ...subject, grade: completed.grade });
      } else if (index < 6) {
        groupedSubjects['1st Year 2nd Term'].push({ ...subject, grade: completed.grade });
      } else if (index < 9) {
        groupedSubjects['1st Year 3rd Term'].push({ ...subject, grade: completed.grade });
      } else {
        groupedSubjects['2nd Year 1st Term'].push({ ...subject, grade: completed.grade });
      }
    }
  });

  // Render grouped subjects
  Object.entries(groupedSubjects).forEach(([term, subjects]) => {
    if (subjects.length > 0) {
      const termSection = document.createElement('div');
      termSection.className = 'term-section';
      termSection.innerHTML = `<h3>${term}</h3>`;

      const termSubjectsContainer = document.createElement('div');
      termSubjectsContainer.className = 'term-subjects-container';

      subjects.forEach(subject => {
        const subjectCard = document.createElement('div');
        subjectCard.className = 'subject-card completed';

        const grade = subject.grade || 'N/A';
        const gradeClass = getGradeClass(grade);

        subjectCard.innerHTML = `
          <h3>${subject.name}</h3>
          <div class="subject-code">${subject.code}</div>
          <div class="subject-details">
            <span class="units">${subject.units} Units</span>
            <span class="department">${getDepartmentName(subject.department)}</span>
            <span class="type">${subject.type === 'major' ? 'Major' : 'Gen Ed'}</span>
          </div>
          <div class="completed-badge ${gradeClass}">
            <span class="completed-text"></span> 
            <span class="grade">${grade}</span>
          </div>
        `;

        termSubjectsContainer.appendChild(subjectCard);
      });

      termSection.appendChild(termSubjectsContainer);
      completedSubjectsContainer.appendChild(termSection);
    }
  });

  // Render currently taking subjects
  const currentlyTakingList = subjects.filter(subject => 
    currentlyTakingSubjects.includes(subject.code)
  );

  if (currentlyTakingList.length > 0) {
    const termSection = document.createElement('div');
    termSection.className = 'term-section';
    termSection.innerHTML = `<h3>Currently Taking</h3>`;

    const termSubjectsContainer = document.createElement('div');
    termSubjectsContainer.className = 'term-subjects-container';

    currentlyTakingList.forEach(subject => {
      const subjectCard = document.createElement('div');
      subjectCard.className = 'subject-card currently-taking';

      subjectCard.innerHTML = `
        <h3>${subject.name}</h3>
        <div class="subject-code">${subject.code}</div>
        <div class="subject-details">
          <span class="units">${subject.units} Units</span>
          <span class="department">${getDepartmentName(subject.department)}</span>
          <span class="type">${subject.type === 'major' ? 'Major' : 'Gen Ed'}</span>
        </div>
        <div class="currently-taking-badge">Currently Taking</div>
      `;

      termSubjectsContainer.appendChild(subjectCard);
    });

    termSection.appendChild(termSubjectsContainer);
    completedSubjectsContainer.appendChild(termSection);
  }

  if (completedSubjectsContainer.children.length === 0) {
    completedSubjectsContainer.innerHTML = '<div class="empty-message">No completed or currently taking subjects found.</div>';
  }
}

// Render prerequisites tab with tree structure
function renderPrerequisites(searchTerm = '') {
  prerequisitesContainer.innerHTML = '';
  
  // Create a map of subjects by code for easy lookup
  const subjectMap = {};
  subjects.forEach(subject => {
    subjectMap[subject.code] = subject;
  });
  
  // Find root subjects (those with no prerequisites)
  const rootSubjects = subjects.filter(subject => 
    subject.prerequisites.length === 0 && 
    (searchTerm === '' || 
     subject.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     subject.code.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  if (rootSubjects.length === 0 && searchTerm !== '') {
    prerequisitesContainer.innerHTML = '<div class="empty-message">No subjects found matching your search.</div>';
    return;
  }
  
  // Create the tree structure
  rootSubjects.forEach(subject => {
    const treeContainer = document.createElement('div');
    treeContainer.className = 'prerequisite-tree';
    
    // Build the tree recursively
    buildPrerequisiteTree(treeContainer, subject, subjectMap, 0);
    
    prerequisitesContainer.appendChild(treeContainer);
  });
  
  // If we have a search term but no root subjects match, search through all subjects
  if (rootSubjects.length === 0 && searchTerm !== '') {
    const matchingSubjects = subjects.filter(subject => 
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      subject.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (matchingSubjects.length > 0) {
      matchingSubjects.forEach(subject => {
        const treeContainer = document.createElement('div');
        treeContainer.className = 'prerequisite-tree';
        
        // Build the tree recursively
        buildPrerequisiteTree(treeContainer, subject, subjectMap, 0);
        
        prerequisitesContainer.appendChild(treeContainer);
      });
    } else {
      prerequisitesContainer.innerHTML = '<div class="empty-message">No subjects found matching your search.</div>';
    }
  }
}

// Build prerequisite tree recursively
function buildPrerequisiteTree(container, subject, subjectMap, level) {
  const completedSubject = completedSubjects.find(completed => completed.code === subject.code);
  const isCompleted = completedSubject !== undefined;
  const isCurrentlyTaking = currentlyTakingSubjects.includes(subject.code);
  const isAvailable = !isCompleted && !isCurrentlyTaking && checkPrerequisites(subject.prerequisites);
  const hasChildren = findChildSubjects(subject.code, subjectMap).length > 0;
  
  const nodeContainer = document.createElement('div');
  nodeContainer.className = `tree-node level-${level} ${isCompleted ? 'completed' : isCurrentlyTaking ? 'currently-taking' : isAvailable ? 'available' : ''}`;
  
  const nodeContent = document.createElement('div');
  nodeContent.className = 'tree-node-content';
  
  const grade = isCompleted ? completedSubject.grade : '';
  const gradeClass = isCompleted ? getGradeClass(grade) : '';
  
  nodeContent.innerHTML = `
    <div class="node-header">
      <span class="node-code">${subject.code}</span>
      <span class="node-name">${subject.name}</span>
      ${isCompleted ? `<span class="node-status completed grade ${gradeClass}">${grade}</span>` : 
        isCurrentlyTaking ? '<span class="node-status currently-taking">⟳ Currently Taking</span>' :
        isAvailable ? '<span class="node-status available">✓ Available</span>' : ''}
    </div>
    <div class="node-details">
      <span class="node-units">${subject.units} Units</span>
      <span class="node-department">${getDepartmentName(subject.department)}</span>
    </div>
  `;
  
  nodeContainer.appendChild(nodeContent);
  
  // Find subjects that have this subject as a prerequisite
  const childSubjects = findChildSubjects(subject.code, subjectMap);
  
  if (childSubjects.length > 0) {
    const childrenContainer = document.createElement('div');
    childrenContainer.className = 'tree-children';
    
    childSubjects.forEach(childSubject => {
      buildPrerequisiteTree(childrenContainer, childSubject, subjectMap, level + 1);
    });
    
    nodeContainer.appendChild(childrenContainer);
  }
  
  container.appendChild(nodeContainer);
}

// Find subjects that have the given subject code as a prerequisite
function findChildSubjects(subjectCode, subjectMap) {
  return subjects.filter(subject => 
    subject.prerequisites.includes(subjectCode)
  );
}

// Open subject modal
function openSubjectModal(subject) {
  // If payment has been completed, don't allow opening the modal
  if (hasCompletedPayment) {
    alert('Enrollment period has ended. You cannot enroll in additional subjects.');
    modal.style.display = 'none';
    return;
  }
  
  currentSubject = subject;
  selectedInstructor = null;
  
  modalTitle.textContent = `${subject.code} - ${subject.name}`;
  modalDescription.textContent = subject.description;
  
  // Render prerequisites
  prerequisitesList.innerHTML = '';
  if (subject.prerequisites.length === 0) {
    prerequisitesList.innerHTML = '<li>No prerequisites required</li>';
  } else {
    subject.prerequisites.forEach(prereq => {
      const prereqSubject = subjects.find(s => s.code === prereq);
      if (prereqSubject) {
        const completedSubject = completedSubjects.find(completed => completed.code === prereq);
        const isMet = completedSubject !== undefined;
        const isCurrentlyTaking = currentlyTakingSubjects.includes(prereq);
        
        const li = document.createElement('li');
        if (isMet) {
          li.className = 'met';
        } else if (isCurrentlyTaking) {
          li.className = 'currently-taking';
        } else {
          li.className = 'not-met';
        }
        
        li.innerHTML = `
          ${prereqSubject.code} - ${prereqSubject.name}
          ${isMet ? `<span class="status-met">${completedSubject.grade}</span>` : 
            isCurrentlyTaking ? '<span class="status-currently-taking">⟳</span>' : 
            '<span class="status-not-met">✗</span>'}
        `;
        prerequisitesList.appendChild(li);
      }
    });
  }
  
   // Render instructors with schedule options
   instructorsList.innerHTML = '';
   subject.instructors.forEach(instructor => {
     const instructorCard = document.createElement('div');
     instructorCard.className = 'instructor-card';
     instructorCard.dataset.id = instructor.id;
 
     // Calculate remaining slots
     const remainingSlots = instructor.slots - instructor.enrolled;
     const slotStatus = remainingSlots <= 5 ? 'low-slots' : (remainingSlots <= 10 ? 'medium-slots' : 'high-slots');
 
     // Generate star rating
     const stars = generateStarRating(instructor.rating);
 
     // Create a dropdown for schedule selection
     const scheduleOptions = instructor.schedule.split(',').map(schedule => {
       return `<option value="${schedule.trim()}">${schedule.trim()}</option>`;
     }).join('');
 
     instructorCard.innerHTML = `
       <h4>${instructor.name}</h4>
       <div class="instructor-details">
                <select class="schedule-select">
           ${scheduleOptions}
         </select>

         <div class="instructor-room">${instructor.room}</div>
         <div class="rating">
           <span class="stars">${stars}</span>
           <span class="rating-value">${instructor.rating.toFixed(1)}</span>
         </div>
         <div class="slots ${slotStatus}">
           <span class="slots-icon">${remainingSlots > 0 ? '👥' : '🚫'}</span>
           <span class="slots-text">${remainingSlots > 0 ? `${remainingSlots} slots remaining` : 'Class Full'}</span>
         </div>

       </div>
     `;
 
     // Disable selection if class is full
     if (remainingSlots > 0) {
       instructorCard.addEventListener('click', () => {
         document.querySelectorAll('.instructor-card').forEach(card => card.classList.remove('selected'));
         instructorCard.classList.add('selected');
         selectedInstructor = instructor;
         updateEnrollButton();
       });
     } else {
       instructorCard.classList.add('full');
     }
 
     instructorsList.appendChild(instructorCard);
   });
 
   // Update enroll button
   enrollButton.disabled = true;
   enrollButton.textContent = 'Select an Instructor';
 
   modal.style.display = 'block';
   updateEnrollButton();
 }

// Update enroll button state
function updateEnrollButton() {
  if (hasCompletedPayment) {
    enrollButton.disabled = true;
    enrollButton.textContent = 'Enrollment Period Ended';
    return;
  }
  
  if (!selectedInstructor) {
    enrollButton.disabled = true;
    enrollButton.textContent = 'Select an Instructor';
  } else {
    const remainingSlots = selectedInstructor.slots - selectedInstructor.enrolled;
    if (remainingSlots <= 0) {
      enrollButton.disabled = true;
      enrollButton.textContent = 'Class is Full';
    } else {
      // Check if adding this subject would exceed the maximum units
      const currentUnits = cart.reduce((total, item) => total + item.subject.units, 0);
      const newTotalUnits = currentUnits + currentSubject.units;
      
      if (newTotalUnits > MAX_UNITS) {
        enrollButton.disabled = true;
        enrollButton.textContent = `Exceeds Maximum Units (${MAX_UNITS})`;
      } else {
        enrollButton.disabled = false;
        enrollButton.textContent = 'Enroll in this Subject';
      }
    }
  }
}

// Check if prerequisites are met
function checkPrerequisites(prerequisites) {
  if (prerequisites.length === 0) return true;
  
  return prerequisites.every(prereq => 
    completedSubjects.some(completed => completed.code === prereq) || 
    currentlyTakingSubjects.includes(prereq)
  );
}

// Generate star rating HTML
function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
  let stars = '';
  for (let i = 0; i < fullStars; i++) {
    stars += '★';
  }
  if (halfStar) {
    stars += '½';
  }
  for (let i = 0; i < emptyStars; i++) {
    stars += '☆';
  }
  
  return stars;
}

// Helper function to get grade class for styling
function getGradeClass(grade) {
  if (grade.startsWith('4.0')) return 'grade-a';
  if (grade.startsWith('3.75')) return 'grade-b';
  if (grade.startsWith('3.25')) return 'grade-c';
  if (grade.startsWith('3.0')) return 'grade-d';
  return 'grade-f';
}

// Add subject to cart
function addToCart() {
  if (hasCompletedPayment) {
    alert('Enrollment period has ended. You cannot enroll in additional subjects.');
    modal.style.display = 'none';
    return;
  }

  if (!selectedInstructor) return;

  // Get the selected schedule
  const selectedSchedule = document.querySelector('.instructor-card.selected .schedule-select').value;

  // Check if subject is already in cart
  if (cart.some(item => item.subject.id === currentSubject.id)) {
    alert('This subject has already been added to your selections.');
    modal.style.display = 'none';
    return;
  }

  // Check if there are available slots
  const remainingSlots = selectedInstructor.slots - selectedInstructor.enrolled;
  if (remainingSlots <= 0) {
    alert('This class is already full.');
    return;
  }

  // Check if adding this subject would exceed the maximum units
  const currentUnits = cart.reduce((total, item) => total + item.subject.units, 0);
  const newTotalUnits = currentUnits + currentSubject.units;

  if (newTotalUnits > MAX_UNITS) {
    alert(`Adding this subject would exceed the maximum allowed units (${MAX_UNITS}).`);
    return;
  }

  // Add to cart with selected schedule
  cart.push({
    subject: currentSubject,
    instructor: selectedInstructor,
    schedule: selectedSchedule // Add the selected schedule
  });

  // Update cart UI
  updateCart();

  // Close modal
  modal.style.display = 'none';

  // Re-render subjects to update UI
  renderSubjects(subjectSearch.value, departmentFilter.value, subjectTypeFilter.value);

  // Update dashboard
  updateDashboard();
}

// Update cart UI
function updateCart() {
  cartItems.innerHTML = '';

  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="empty-cart">Your cart is empty. Add subjects to enroll.</div>';
    checkoutButton.disabled = true;
    dashboardCheckout.disabled = true;
  } else {
    cart.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';

      cartItem.innerHTML = `
        <div class="cart-item-details">
          <h3>${item.subject.code} - ${item.subject.name}</h3>
          <div class="subject-code">${getDepartmentName(item.subject.department)} (${item.subject.type === 'major' ? 'Major' : 'Gen Ed'})</div>
          <div class="instructor">
            Instructor: ${item.instructor.name} (${item.schedule}) <!-- Display selected schedule -->
            ${!hasCompletedPayment ? `<button class="change-instructor" data-subject-id="${item.subject.id}">Change</button>` : ''}
          </div>
          <div class="room">Room: ${item.instructor.room}</div>
        </div>
        <div class="cart-item-actions">
          <span class="cart-item-units">${item.subject.units} Units</span>
          ${!hasCompletedPayment ? `<button class="remove-button" data-index="${index}">✕</button>` : ''}
        </div>
      `;

      cartItems.appendChild(cartItem);
    });

    // Add event listeners to remove buttons (only if payment hasn't been completed)
    if (!hasCompletedPayment) {
      document.querySelectorAll('.remove-button').forEach(button => {
        button.addEventListener('click', (e) => {
          const index = parseInt(e.target.dataset.index);
          removeFromCart(index);
        });
      });

      // Add event listeners to change instructor buttons
      document.querySelectorAll('.change-instructor').forEach(button => {
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          const subjectId = parseInt(e.target.dataset.subjectId);
          const subject = subjects.find(s => s.id === subjectId);
          if (subject) {
            openSubjectModal(subject);

            // Remove the current enrollment for this subject
            const index = cart.findIndex(item => item.subject.id === subjectId);
            if (index !== -1) {
              cart.splice(index, 1);
              updateCart();
            }
          }
        });
      });
    }

    checkoutButton.disabled = hasCompletedPayment;
    dashboardCheckout.disabled = hasCompletedPayment;
  }

  // Update totals
  const units = cart.reduce((total, item) => total + item.subject.units, 0);
  const amount = cart.reduce((total, item) => total + item.subject.price, 0);

  totalUnits.textContent = units;
  headerTotalUnits.textContent = units;
  totalAmount.textContent = amount.toLocaleString();

  // Update progress bar
  const progressPercentage = Math.min((units / MAX_UNITS) * 100, 100);
  unitsProgressBar.style.width = `${progressPercentage}%`;

  // Change progress bar color based on units
  if (units > MAX_UNITS * 0.8) {
    unitsProgressBar.className = 'progress-bar danger';
  } else if (units > MAX_UNITS * 0.6) {
    unitsProgressBar.className = 'progress-bar warning';
  } else {
    unitsProgressBar.className = 'progress-bar';
  }
}

// Update dashboard
function updateDashboard() {
  // Update stats
  enrolledCount.textContent = cart.length;
  completedCount.textContent = completedSubjects.length;

  // Update enrollment table
  enrollmentTableBody.innerHTML = '';

  if (cart.length === 0) {
    noEnrollmentMessage.style.display = 'block';
  } else {
    noEnrollmentMessage.style.display = 'none';

    cart.forEach(item => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>
          <div class="font-medium">${item.subject.code}</div>
          <div class="text-gray-500">${item.subject.name}</div>
        </td>
        <td>${item.instructor.name}</td>
        <td>${item.schedule}</td> <!-- Display selected schedule -->
        <td>${item.subject.units}</td>
      `;

      enrollmentTableBody.appendChild(row);
    });
  }

  // Update summary
  const units = cart.reduce((total, item) => total + item.subject.units, 0);
  const amount = cart.reduce((total, item) => total + item.subject.price, 0);

  summaryUnits.textContent = units;
  summarySubjects.textContent = cart.length;
  summaryAmount.textContent = amount.toLocaleString();
}

// Remove item from cart
function removeFromCart(index) {
  if (hasCompletedPayment) {
    alert('Enrollment period has ended. You cannot modify your enrolled subjects.');
    return;
  }
  
  cart.splice(index, 1);
  updateCart();
  renderSubjects(subjectSearch.value, departmentFilter.value, subjectTypeFilter.value);
  updateDashboard();
}

// Open payment modal
function openPaymentModal() {
  if (hasCompletedPayment) {
    alert('You have already completed payment for your enrolled subjects.');
    return;
  }

  paymentSubjects.innerHTML = '';

  cart.forEach(item => {
    const paymentSubject = document.createElement('div');
    paymentSubject.className = 'payment-subject';

    paymentSubject.innerHTML = `
      <div class="payment-subject-name">${item.subject.code} - ${item.subject.name} (${item.subject.units} Units)</div>
      <div class="payment-subject-instructor">Instructor: ${item.instructor.name} | Schedule: ${item.schedule} | Room: ${item.instructor.room}</div>
      <div class="payment-subject-price">₱${item.subject.price.toLocaleString()}</div>
    `;

    paymentSubjects.appendChild(paymentSubject);
  });

  // Update totals
  const units = cart.reduce((total, item) => total + item.subject.units, 0);
  const amount = cart.reduce((total, item) => total + item.subject.price, 0);

  paymentUnits.textContent = units;
  paymentAmount.textContent = amount.toLocaleString();

  paymentModal.style.display = 'block';
}

// Complete payment
function completePaymentProcess() {
  // Generate reference number
  const refNumber = 'CIIT-' + Date.now().toString().substring(5);
  referenceNumber.textContent = refNumber;

  // Move cart subjects to currently taking
  cart.forEach(item => {
    if (!completedSubjects.some(completed => completed.code === item.subject.code) && 
        !currentlyTakingSubjects.includes(item.subject.code)) {
      currentlyTakingSubjects.push(item.subject.code);
    }
  });

  // Set payment completed flag
  hasCompletedPayment = true;

  // Close payment modal and open success modal
  paymentModal.style.display = 'none';
  successModal.style.display = 'block';

  // Update UI to reflect payment completion
  updateCart();
  renderSubjects(subjectSearch.value, departmentFilter.value, subjectTypeFilter.value);
  renderCompletedSubjects();
  renderPrerequisites(prerequisiteSearch.value);
  updateDashboard();
}

// Get department name from code
function getDepartmentName(code) {
  const departments = {
    'CS': 'Computer Science',
    'IT': 'Information Technology',
    'ARTS': 'Digital Arts',
    'GAME': 'Game Development',
    'GE': 'General Education'
  };
  
  return departments[code] || code;
}

// Switch tab
function switchTab(tabId) {
  // Update active tab
  tabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.tab === tabId) {
      tab.classList.add('active');
    }
  });
  
  // Show corresponding content
  tabContents.forEach(content => {
    content.classList.remove('active');
    if (content.id === tabId) {
      content.classList.add('active');
    }
  });
  
  // Show/hide cart section based on the active tab
  const cartSection = document.getElementById('cart');
  if (tabId === 'enrollment') {
    cartSection.style.display = 'block'; // Show cart in Enrollment tab
  } else {
    cartSection.style.display = 'none'; // Hide cart in other tabs
  }
}

// Add event listeners
function addEventListeners() {
  // Tab navigation
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab(tab.dataset.tab);
    });
  });
  
  // Search and filter
  subjectSearch.addEventListener('input', () => {
    renderSubjects(subjectSearch.value, departmentFilter.value, subjectTypeFilter.value);
  });
  
  departmentFilter.addEventListener('change', () => {
    renderSubjects(subjectSearch.value, departmentFilter.value, subjectTypeFilter.value);
  });
  
  subjectTypeFilter.addEventListener('change', () => {
    renderSubjects(subjectSearch.value, departmentFilter.value, subjectTypeFilter.value);
  });
  
  prerequisiteSearch.addEventListener('input', () => {
    renderPrerequisites(prerequisiteSearch.value);
  });
  
  instructorSearch.addEventListener('input', () => {
    renderInstructors(instructorSearch.value, specializationFilter.value);
  });
  
  specializationFilter.addEventListener('change', () => {
    renderInstructors(instructorSearch.value, specializationFilter.value);
  });
  
  // Modal close
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  closeInstructorModal.addEventListener('click', () => {
    instructorModal.style.display = 'none';
  });
  
  paymentClose.addEventListener('click', () => {
    paymentModal.style.display = 'none';
  });
  
  // Close modals when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
    if (e.target === instructorModal) {
      instructorModal.style.display = 'none';
    }
    if (e.target === paymentModal) {
      paymentModal.style.display = 'none';
    }
    if (e.target === successModal) {
      successModal.style.display = 'none';
    }
  });
  
  // Enroll button
  enrollButton.addEventListener('click', addToCart);
  
  // Checkout buttons
  checkoutButton.addEventListener('click', openPaymentModal);
  dashboardCheckout.addEventListener('click', openPaymentModal);
  
  // Payment method selection
  paymentMethods.forEach(method => {
    method.addEventListener('change', () => {
      const selectedMethod = method.value;
      
      paymentDetails.forEach(detail => {
        detail.classList.remove('active');
        if (detail.id === `${selectedMethod}-payment`) {
          detail.classList.add('active');
        }
      });
    });
  });
  
// Logout functionality
document.getElementById('logout-button').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default link behavior

  // Clear any session data (if applicable)
  localStorage.removeItem('userEmail'); // Clear user email from localStorage
  sessionStorage.removeItem('user'); // Example: Clear user data from sessionStorage

  // Redirect to the login page
  window.location.href = 'login.html';
});

  // Complete payment button
  completePayment.addEventListener('click', completePaymentProcess);
  
  // Close success modal
  closeSuccess.addEventListener('click', () => {
    successModal.style.display = 'none';
  });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', init);