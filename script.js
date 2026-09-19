const HOSPITALS_KEY = 'hrs_hospitals',
  REQUESTS_KEY = 'hrs_requests',
  SESSION_KEY = 'hrs_session';

const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
const DEPARTMENTS = [
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'General Surgery',
  'Gynecology',
  'Emergency Medicine',
];
const EQUIPMENT_NAMES = [
  'MRI',
  'CT Scan',
  'Ventilator',
  'X-Ray',
  'Dialysis Unit',
  'Ultrasound',
];

const defaultHospitals = [
  {
    id: 'apollo-delhi',
    name: 'Apollo Indraprastha Hospital',
    address: 'Sarita Vihar, Mathura Road',
    city: 'New Delhi',
    phone: '+91 11 2692 5858',
    secretCode: 'APOLLO24',
    beds: { icuTotal: 42, icuAvailable: 7, generalTotal: 180, generalAvailable: 68 },
    emergency: { capacity: 30, admitted: 27 },
    blood: { 'A+': 18, 'A-': 4, 'B+': 24, 'B-': 2, 'O+': 31, 'O-': 1, 'AB+': 12, 'AB-': 0 },
    equipment: [
      ['MRI', 'available'],
      ['CT Scan', 'available'],
      ['Ventilator', 'limited'],
      ['X-Ray', 'available'],
      ['Dialysis Unit', 'available'],
      ['Ultrasound', 'available'],
    ],
    doctors: [
      ['Dr. Meera Nair', 'Cardiology', 18, 'available'],
      ['Dr. Arjun Kapoor', 'Neurology', 12, 'available'],
      ['Dr. Ritu Bansal', 'Pediatrics', 9, 'limited'],
      ['Dr. Vikram Shah', 'Emergency Medicine', 16, 'available'],
    ],
    bloodRequired: [
      ['O-', 8],
      ['AB-', 4],
    ],
  },
  {
    id: 'fortis-mumbai',
    name: 'Fortis Mulund Hospital',
    address: 'Mulund Goregaon Link Road, Mulund West',
    city: 'Mumbai',
    phone: '+91 22 6799 4444',
    secretCode: 'FORTIS24',
    beds: { icuTotal: 55, icuAvailable: 38, generalTotal: 240, generalAvailable: 152 },
    emergency: { capacity: 40, admitted: 18 },
    blood: { 'A+': 27, 'A-': 11, 'B+': 16, 'B-': 7, 'O+': 42, 'O-': 14, 'AB+': 8, 'AB-': 3 },
    equipment: [
      ['MRI', 'available'],
      ['CT Scan', 'available'],
      ['Ventilator', 'available'],
      ['X-Ray', 'available'],
      ['Dialysis Unit', 'available'],
      ['Ultrasound', 'available'],
    ],
    doctors: [
      ['Dr. Neelam Joshi', 'Cardiology', 21, 'available'],
      ['Dr. Sameer Iyer', 'Orthopedics', 14, 'available'],
      ['Dr. Ananya Rao', 'General Surgery', 11, 'available'],
      ['Dr. Farah Khan', 'Gynecology', 10, 'available'],
      ['Dr. Kabir Mehta', 'Emergency Medicine', 8, 'limited'],
    ],
    bloodRequired: [['B-', 6]],
  },
  {
    id: 'manipal-bengaluru',
    name: 'Manipal Hospital Old Airport Road',
    address: '98, HAL Airport Road',
    city: 'Bengaluru',
    phone: '+91 80 2502 4444',
    secretCode: 'MANIPAL24',
    beds: { icuTotal: 36, icuAvailable: 12, generalTotal: 155, generalAvailable: 24 },
    emergency: { capacity: 24, admitted: 22 },
    blood: { 'A+': 8, 'A-': 2, 'B+': 13, 'B-': 4, 'O+': 22, 'O-': 0, 'AB+': 5, 'AB-': 1 },
    equipment: [
      ['MRI', 'limited'],
      ['CT Scan', 'available'],
      ['Ventilator', 'limited'],
      ['X-Ray', 'available'],
      ['Dialysis Unit', 'limited'],
      ['Ultrasound', 'available'],
    ],
    doctors: [
      ['Dr. Shweta Menon', 'Neurology', 17, 'available'],
      ['Dr. Rohit Shetty', 'Cardiology', 13, 'limited'],
      ['Dr. Isha Thomas', 'Pediatrics', 7, 'available'],
      ['Dr. Aditya Rao', 'Emergency Medicine', 9, 'available'],
    ],
    bloodRequired: [
      ['O-', 12],
      ['A-', 5],
    ],
  },
  {
    id: 'medanta-gurugram',
    name: 'Medanta The Medicity',
    address: 'CH Baktawar Singh Road, Sector 38',
    city: 'Gurugram',
    phone: '+91 124 4141 414',
    secretCode: 'MEDANTA24',
    beds: { icuTotal: 70, icuAvailable: 52, generalTotal: 300, generalAvailable: 210 },
    emergency: { capacity: 50, admitted: 21 },
    blood: { 'A+': 35, 'A-': 15, 'B+': 29, 'B-': 12, 'O+': 48, 'O-': 18, 'AB+': 17, 'AB-': 8 },
    equipment: EQUIPMENT_NAMES.map(name => [name, 'available']),
    doctors: [
      ['Dr. Ashok Seth', 'Cardiology', 26, 'available'],
      ['Dr. Kavita Singh', 'Neurology', 19, 'available'],
      ['Dr. Nitin Verma', 'Orthopedics', 15, 'available'],
      ['Dr. Pooja Arora', 'General Surgery', 12, 'available'],
      ['Dr. Anil Khanna', 'Emergency Medicine', 18, 'available'],
    ],
    bloodRequired: [['AB-', 3]],
  },
  {
    id: 'narayana-kolkata',
    name: 'Narayana Superspeciality Hospital',
    address: '120/1, Andul Road, West Bank',
    city: 'Howrah',
    phone: '+91 33 7122 2222',
    secretCode: 'NARAYANA24',
    beds: { icuTotal: 30, icuAvailable: 3, generalTotal: 120, generalAvailable: 18 },
    emergency: { capacity: 20, admitted: 20 },
    blood: { 'A+': 12, 'A-': 3, 'B+': 9, 'B-': 1, 'O+': 19, 'O-': 2, 'AB+': 4, 'AB-': 0 },
    equipment: [
      ['MRI', 'unavailable'],
      ['CT Scan', 'limited'],
      ['Ventilator', 'limited'],
      ['X-Ray', 'available'],
      ['Dialysis Unit', 'available'],
      ['Ultrasound', 'limited'],
    ],
    doctors: [
      ['Dr. Subhankar Das', 'Cardiology', 15, 'available'],
      ['Dr. Priyanka Sen', 'Gynecology', 11, 'available'],
      ['Dr. Saurav Bose', 'Emergency Medicine', 8, 'unavailable'],
    ],
    bloodRequired: [
      ['B-', 10],
      ['AB-', 6],
    ],
  },
  {
    id: 'kims-hyderabad',
    name: 'KIMS Hospitals',
    address: '1-8-31/1, Minister Road, Secunderabad',
    city: 'Hyderabad',
    phone: '+91 40 4488 5000',
    secretCode: 'KIMS2024',
    beds: { icuTotal: 48, icuAvailable: 25, generalTotal: 220, generalAvailable: 98 },
    emergency: { capacity: 35, admitted: 12 },
    blood: { 'A+': 22, 'A-': 6, 'B+': 18, 'B-': 5, 'O+': 34, 'O-': 9, 'AB+': 11, 'AB-': 2 },
    equipment: [
      ['MRI', 'available'],
      ['CT Scan', 'available'],
      ['Ventilator', 'available'],
      ['X-Ray', 'available'],
      ['Dialysis Unit', 'limited'],
      ['Ultrasound', 'available'],
    ],
    doctors: [
      ['Dr. Ramesh Reddy', 'Orthopedics', 20, 'available'],
      ['Dr. Lakshmi Devi', 'Pediatrics', 14, 'available'],
      ['Dr. Naveen Kumar', 'General Surgery', 12, 'limited'],
      ['Dr. Harini Rao', 'Emergency Medicine', 10, 'available'],
    ],
    bloodRequired: [['O-', 5]],
  },
  {
    id: 'ruby-hall-pune',
    name: 'Ruby Hall Clinic',
    address: '40, Sassoon Road',
    city: 'Pune',
    phone: '+91 20 6645 5555',
    secretCode: 'RUBY2024',
    beds: { icuTotal: 28, icuAvailable: 16, generalTotal: 130, generalAvailable: 75 },
    emergency: { capacity: 18, admitted: 7 },
    blood: { 'A+': 15, 'A-': 8, 'B+': 12, 'B-': 4, 'O+': 26, 'O-': 6, 'AB+': 6, 'AB-': 1 },
    equipment: [
      ['MRI', 'available'],
      ['CT Scan', 'limited'],
      ['Ventilator', 'available'],
      ['X-Ray', 'available'],
      ['Dialysis Unit', 'available'],
      ['Ultrasound', 'available'],
    ],
    doctors: [
      ['Dr. Sameer Kulkarni', 'Cardiology', 22, 'available'],
      ['Dr. Aditi Patil', 'Neurology', 13, 'available'],
      ['Dr. Manish Joshi', 'Orthopedics', 16, 'available'],
      ['Dr. Tanvi Deshmukh', 'Emergency Medicine', 7, 'limited'],
    ],
    bloodRequired: [['A-', 7]],
  },
];

const escapeHtml = value =>
  String(value ?? '').replace(
    /[&<>"']/g,
    c =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      }[c])
  );

const normalizeData = items =>
  items.map(h => ({
    ...h,
    equipment: h.equipment.map(e =>
      Array.isArray(e) ? { name: e[0], status: e[1] } : e
    ),
    doctors: h.doctors.map(d =>
      Array.isArray(d)
        ? {
            name: d[0],
            department: d[1],
            experienceYears: d[2],
            status: d[3],
          }
        : d
    ),
    bloodRequired: h.bloodRequired.map(r =>
      Array.isArray(r) ? { group: r[0], units: r[1] } : r
    ),
  }));

const readHospitals = () => {
  try {
    const value = localStorage.getItem(HOSPITALS_KEY);
    if (value) return JSON.parse(value);
  } catch {}
  const value = normalizeData(JSON.parse(JSON.stringify(defaultHospitals)));
  localStorage.setItem(HOSPITALS_KEY, JSON.stringify(value));
  return value;
};

const readRequests = () => {
  try {
    return JSON.parse(localStorage.getItem(REQUESTS_KEY) || '[]');
  } catch {
    return [];
  }
};

const writeHospitals = value => {
  localStorage.setItem(HOSPITALS_KEY, JSON.stringify(value));
  localStorage.setItem('hrs_sync', Date.now());
  window.dispatchEvent(new CustomEvent('hrs-hospitals-updated'));
};

const readSession = () => {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
  } catch {
    return null;
  }
};

const saveSession = value =>
  localStorage.setItem(SESSION_KEY, JSON.stringify(value));

const statusFor = (available, total) =>
  available <= 0
    ? 'unavailable'
    : available / total > 0.5
    ? 'available'
    : available / total >= 0.2
    ? 'limited'
    : 'critical';

const bloodStatus = units =>
  units > 10
    ? 'available'
    : units >= 4
    ? 'limited'
    : units > 0
    ? 'critical'
    : 'unavailable';

const pill = (status, label = status) =>
  `<span class="status-badge ${escapeHtml(status)}">${escapeHtml(
    label
  )}</span>`;

const session = () => readSession();

let hospitals = readHospitals(),
  activeView = 'login',
  role = 'user',
  openHospitalId = null,
  selectedHospitalId = null,
  requestFilter = 'all';

const showView = name => {
  const current = session();
  if (name === 'user' && current?.role !== 'user') return showView('login');
  if ((name === 'admin' || name === 'requests') && current?.role !== 'admin')
    return showView('login');

  activeView = name;
  document
    .querySelectorAll('.view')
    .forEach(view => view.classList.toggle('hidden', view.id !== `${name}View`));

  if (name === 'user') renderUser();
  if (name === 'admin') renderAdmin();
  if (name === 'requests') renderRequests();
};

const logout = () => {
  localStorage.removeItem(SESSION_KEY);
  showView('login');
};

const toast = message => {
  const el = document.querySelector('#toast');
  el.textContent = message;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3000);
};

const header = admin => {
  const current = session(),
    hospital = admin ? hospitals.find(h => h.id === current.hospitalId) : null;

  return `<header class="site-header"><div class="header-inner"><a class="brand" href="#" data-nav="${
    admin ? 'admin' : 'user'
  }"><span class="brand-mark small">+</span><span>${
    admin ? escapeHtml(hospital.name) : 'HRA'
  }<small>${
    admin ? 'Hospital admin' : 'Hospital Resource Availability'
  }</small></span></a>${
    admin
      ? `<nav class="main-nav"><a href="#" data-nav="admin" class="${
          activeView === 'admin' ? 'active' : ''
        }">Dashboard</a><a href="#" data-nav="requests" class="${
          activeView === 'requests' ? 'active' : ''
        }">Emergency Requests <span class="nav-count">${
          readRequests().filter(r => r.hospitalId === hospital.id).length
        }</span></a></nav>`
      : ''
  }<div class="header-actions">${
    admin ? '' : `<span class="user-greeting">Hi, ${escapeHtml(current.userName)}</span>`
  }<button class="button ghost" data-action="logout" type="button">Logout</button></div></div></header>`;
};

const getFilters = () => ({
  search: (document.querySelector('#searchInput')?.value || '').toLowerCase(),
  icu: document.querySelector('#icuFilter')?.checked,
  general: document.querySelector('#generalFilter')?.checked,
  emergency: document.querySelector('#emergencyFilter')?.checked,
  blood: document.querySelector('#bloodFilter')?.value,
  equipment: document.querySelector('#equipmentFilter')?.value,
  department: document.querySelector('#departmentFilter')?.value,
  sort: document.querySelector('#sortFilter')?.value || 'icu',
});

const renderUser = () => {
  hospitals = readHospitals();
  const f = getFilters();

  let list = hospitals.filter(
    h =>
      (!f.search || `${h.name} ${h.city}`.toLowerCase().includes(f.search)) &&
      (!f.icu || h.beds.icuAvailable > 0) &&
      (!f.general || h.beds.generalAvailable > 0) &&
      (!f.emergency || h.emergency.admitted < h.emergency.capacity) &&
      (!f.blood || h.blood[f.blood] > 0) &&
      (!f.equipment ||
        h.equipment.some(
          e => e.name === f.equipment && e.status === 'available'
        )) &&
      (!f.department ||
        h.doctors.some(
          d => d.department === f.department && d.status === 'available'
        ))
  );

  list.sort((a, b) =>
    f.sort === 'name'
      ? a.name.localeCompare(b.name)
      : f.sort === 'general'
      ? b.beds.generalAvailable - a.beds.generalAvailable
      : b.beds.icuAvailable - a.beds.icuAvailable
  );

  document.querySelector('#userView').innerHTML =
    header(false) +
    `<main class="page-shell"><section class="page-heading"><div><span class="eyebrow">Live network view</span><h1>Find the right care, faster.</h1><p class="muted">Compare resources across hospitals when every minute matters.</p></div></section><section class="filter-panel panel"><div class="filter-heading"><h2>Search availability</h2><span class="count-label">Showing ${
      list.length
    } of 7 hospitals</span><button class="button text-button" data-action="clear-filters" type="button">Clear filters</button></div><div class="filter-grid"><label class="search-field">Search hospitals or cities<input id="searchInput" value="${escapeHtml(
      f.search
    )}" type="search"></label><label>Blood group<select id="bloodFilter"><option value="">Any blood group</option>${BLOOD_GROUPS.map(
      g => `<option ${f.blood === g ? 'selected' : ''}>${g}</option>`
    ).join(
      ''
    )}</select></label><label>Equipment<select id="equipmentFilter"><option value="">Any equipment</option>${EQUIPMENT_NAMES.map(
      e => `<option ${f.equipment === e ? 'selected' : ''}>${e}</option>`
    ).join(
      ''
    )}</select></label><label>Department<select id="departmentFilter"><option value="">Any department</option>${DEPARTMENTS.map(
      d => `<option ${f.department === d ? 'selected' : ''}>${d}</option>`
    ).join(
      ''
    )}</select></label><label>Sort by<select id="sortFilter"><option value="icu" ${
      f.sort === 'icu' ? 'selected' : ''
    }>Most ICU beds</option><option value="general" ${
      f.sort === 'general' ? 'selected' : ''
    }>Most general beds</option><option value="name" ${
      f.sort === 'name' ? 'selected' : ''
    }>Name A-Z</option></select></label></div><div class="check-row"><label class="check-label"><input id="icuFilter" type="checkbox" ${
      f.icu ? 'checked' : ''
    }> Has ICU beds available</label><label class="check-label"><input id="generalFilter" type="checkbox" ${
      f.general ? 'checked' : ''
    }> Has general beds available</label><label class="check-label"><input id="emergencyFilter" type="checkbox" ${
      f.emergency ? 'checked' : ''
    }> Emergency capacity available</label></div></section><section class="hospital-list">${
      list.length
        ? list.map(renderHospital).join('')
        : '<div class="empty-state">No hospitals match these filters.</div>'
    }</section></main>`;
  bindUser();
};

const renderHospital = h => {
  const slots = h.emergency.capacity - h.emergency.admitted,
    open = openHospitalId === h.id,
    groups = [...new Set(h.doctors.map(d => d.department))];

  return `<article class="hospital-card ${
    open ? 'open' : ''
  }" data-id="${escapeHtml(h.id)}"><div class="hospital-summary"><div><h2>${escapeHtml(
    h.name
  )}</h2><p class="muted">${escapeHtml(h.address)}, ${escapeHtml(
    h.city
  )}</p></div><button class="expand-button" data-action="toggle-details" data-id="${escapeHtml(
    h.id
  )}" type="button">${
    open ? 'Hide details' : 'View details'
  }</button></div><div class="quick-strip"><div class="quick-cell"><small>ICU beds</small><strong>${
    h.beds.icuAvailable
  }/${h.beds.icuTotal}</strong>${pill(
    statusFor(h.beds.icuAvailable, h.beds.icuTotal)
  )}</div><div class="quick-cell"><small>General beds</small><strong>${
    h.beds.generalAvailable
  }/${h.beds.generalTotal}</strong>${pill(
    statusFor(h.beds.generalAvailable, h.beds.generalTotal)
  )}</div><div class="quick-cell"><small>Emergency</small><strong>${slots} slots</strong>${pill(
    statusFor(slots, h.emergency.capacity)
  )}</div></div>${
    open
      ? `<div class="hospital-detail"><div class="detail-block"><h3>Contact</h3><p class="muted">${escapeHtml(
          h.address
        )}, ${escapeHtml(h.city)}<br>${escapeHtml(
          h.phone
        )}</p></div><div class="detail-block"><h3>Bed capacity</h3>${resourceLine(
          'ICU beds',
          `${h.beds.icuAvailable} / ${h.beds.icuTotal}`,
          statusFor(h.beds.icuAvailable, h.beds.icuTotal)
        )}${resourceLine(
          'General beds',
          `${h.beds.generalAvailable} / ${h.beds.generalTotal}`,
          statusFor(h.beds.generalAvailable, h.beds.generalTotal)
        )}</div><div class="detail-block"><h3>Emergency</h3><p class="muted">${           h.emergency.capacity         } capacity,${h.emergency.admitted} patients admitted, ${slots} slots remaining${pill(
          statusFor(slots, h.emergency.capacity)
        )}</p></div><div class="detail-block"><h3>Blood availability</h3><div class="blood-grid">${BLOOD_GROUPS.map(
          g =>
            `<div class="blood-item"><strong>${g}</strong><small>${
              h.blood[g]
            } units</small>${pill(bloodStatus(h.blood[g]))}</div>`
        ).join(
          ''
        )}</div></div><div class="detail-block"><h3>Special equipment</h3><div class="equipment-list">${h.equipment
          .map(
            e =>
              `<div class="equipment-row"><span>${escapeHtml(
                e.name
              )}</span>${pill(e.status)}</div>`
          )
          .join(
            ''
          )}</div></div><div class="detail-block"><h3>Doctors</h3>${groups
          .map(
            group =>
              `<div class="dept-label">${escapeHtml(
                group
              )}</div>${h.doctors
                .filter(d => d.department === group)
                .map(
                  d =>
                    `<div class="doctor-row"><div class="doctor-info"><strong>${escapeHtml(
                      d.name
                    )}</strong><span>${                       d.experienceYears                     } years experience</span></div>${pill(d.status)}</div>`
                )
                .join('')}`
          )
          .join(
            ''
          )}</div><div class="note-box"><h3>Note - Blood Required</h3>${
          h.bloodRequired.length
            ? h.bloodRequired
                .map(
                  r =>
                    `<div class="note-row"><span>${escapeHtml(r.group)} - ${
                      r.units
                    } units needed</span>${pill(
                      r.units > 10 ? 'critical' : 'limited',
                      r.units > 10 ? 'High urgency' : 'Needs replenishment'
                    )}</div>`
                )
                .join('')
            : '<p class="muted">No blood requirement currently.</p>'
        }</div><div class="detail-footer"><button class="button emergency" data-action="request" type="button">Emergency Request</button></div></div>`
      : ''
  }</article>`;
};

const resourceLine = (label, value, status) =>
  `<div class="resource-line"><span>${label}<br><strong>${value}</strong></span>${pill(
    status
  )}</div>`;

const bindUser = () => {
  const view = document.querySelector('#userView');
  view
    .querySelectorAll('input,select')
    .forEach(el => el.addEventListener('input', renderUser));

  view.onclick = e => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    if (btn.dataset.action === 'logout') return logout();
    if (btn.dataset.action === 'clear-filters') {
      openHospitalId = null;
      renderUser();
      return;
    }
    if (btn.dataset.action === 'toggle-details') {
      const id = btn.dataset.id;
      openHospitalId = openHospitalId === id ? null : id;
      renderUser();
    }
    if (btn.dataset.action === 'request')
      openRequest(btn.closest('[data-id]').dataset.id);
  };

  view.querySelectorAll('[data-nav]').forEach(
    a =>
      (a.onclick = e => {
        e.preventDefault();
        showView(a.dataset.nav);
      })
  );
};

const openRequest = id => {
  selectedHospitalId = id;
  const h = hospitals.find(item => item.id === id);

  document.querySelector('#modalRoot').innerHTML = `<div class="modal-backdrop"><div class="modal panel"><button class="modal-close" data-action="close-modal" type="button">x</button><span class="eyebrow">Emergency coordination</span><h2>Send an emergency request</h2><p class="muted">Your request will be sent to ${escapeHtml(
    h.name
  )}.</p><form id="requestForm" class="form-stack"><label>Patient name<input id="patientName" required></label><label>Contact number<input id="contact" required></label><label>Reason for emergency<textarea id="reason" required rows="4"></textarea></label><label>Urgency<select id="urgency"><option>High</option><option selected>Medium</option><option>Low</option></select></label><p id="requestError" class="field-error"></p><button class="button emergency full" type="submit">Send request</button></form></div></div>`;

  document.querySelector('#modalRoot').onclick = e => {
    if (
      e.target.dataset.action === 'close-modal' ||
      e.target.classList.contains('modal-backdrop')
    )
      document.querySelector('#modalRoot').innerHTML = '';
  };

  document.querySelector('#requestForm').onsubmit = e => {
    e.preventDefault();
    const reason = document.querySelector('#reason').value.trim();
    if (!reason)
      return (document.querySelector('#requestError').textContent =
        'Please describe the reason for this emergency.');

    const request = {
      id: `request-${Date.now()}`,
      hospitalId: selectedHospitalId,
      userName: session().userName,
      patientName: document.querySelector('#patientName').value.trim(),
      contact: document.querySelector('#contact').value.trim(),
      reason,
      urgency: document.querySelector('#urgency').value,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem(
      REQUESTS_KEY,
      JSON.stringify([request, ...readRequests()])
    );
    document.querySelector('#modalRoot').innerHTML = '';
    toast('Emergency request sent to the hospital admin.');
  };
};

const currentAdmin = () => hospitals.find(h => h.id === session().hospitalId);

const editor = (title, subtitle, content, key) =>
  `<section class="editor-card panel" data-section="${key}"><h2>${title}</h2><p class="muted">${subtitle}</p>${content}</section>`;

const numInput = (id, label, value) =>
  `<label class="input-label">${label}<input data-field="${id}" type="number" min="0" value="${value}"></label>`;

const saveButton = key =>
  `<div class="editor-actions"><button class="button primary" data-save="${key}" type="button">Save changes</button></div>`;

const adminSection = (h, key) => {
  if (key === 'beds')
    return editor(
      'Bed capacity',
      'Keep availability current.',
      `<div class="number-grid">${numInput(
        'icuAvailable',
        'ICU available',
        h.beds.icuAvailable
      )}${numInput('icuTotal', 'ICU total', h.beds.icuTotal)}${numInput(
        'generalAvailable',
        'General available',
        h.beds.generalAvailable
      )}${numInput(
        'generalTotal',
        'General total',
        h.beds.generalTotal
      )}</div><p class="inline-error" data-error="beds"></p>${saveButton(
        key
      )}`,
      key
    );

  if (key === 'emergency')
    return editor(
      'Emergency department',
      'Track live occupancy.',
      `${numInput('capacity', 'Total capacity', h.emergency.capacity)}${numInput(
        'admitted',
        'Patients admitted',
        h.emergency.admitted
      )}<p class="inline-error" data-error="emergency"></p>${saveButton(key)}`,
      key
    );

  if (key === 'blood')
    return editor(
      'Blood inventory',
      'Units by blood group.',
      `<div class="blood-edit-grid">${BLOOD_GROUPS.map(g =>
        numInput(`blood-${g}`, g, h.blood[g])
      ).join('')}</div>${saveButton(key)}`,
      key
    );

  if (key === 'equipment')
    return editor(
      'Special equipment',
      'Update equipment access.',
      `<div class="equipment-editor">${h.equipment
        .map(
          (e, i) =>
            `<div class="editable-row"><input data-equipment-name="${i}" value="${escapeHtml(
              e.name
            )}"><select data-equipment-status="${i}">${[
              'available',
              'limited',
              'unavailable',
            ]
              .map(
                s => `<option ${s === e.status ? 'selected' : ''}>${s}</option>`
              )
              .join(
                ''
              )}</select><button class="remove-button" data-action="remove-equipment" data-index="${i}" type="button">Remove</button></div>`
        )
        .join(
          ''
        )}</div><button class="add-button" data-action="add-equipment" type="button">+ Add equipment</button>${saveButton(
        key
      )}`,
      key
    );

  if (key === 'doctors')
    return editor(
      'Doctors',
      'Manage specialists.',
      `<div class="doctor-editor">${h.doctors
        .map(
          (d, i) =>
            `<div class="doctor-edit-row"><input data-doctor="${i}:name" value="${escapeHtml(
              d.name
            )}"><select data-doctor="${i}:department">${DEPARTMENTS.map(
              x => `<option ${x === d.department ? 'selected' : ''}>${x}</option>`
            ).join(
              ''
            )}</select><input data-doctor="${i}:years" type="number" min="0" value="${
              d.experienceYears
            }"><select data-doctor="${i}:status">${[
              'available',
              'limited',
              'unavailable',
            ]
              .map(
                s => `<option ${s === d.status ? 'selected' : ''}>${s}</option>`
              )
              .join(
                ''
              )}</select><button class="remove-button" data-action="remove-doctor" data-index="${i}" type="button">Remove</button></div>`
        )
        .join(
          ''
        )}</div><button class="add-button" data-action="add-doctor" type="button">+ Add doctor</button>${saveButton(
        key
      )}`,
      key
    );

  return editor(
    'Required blood',
    'Publish shortages.',
    `<div class="required-editor">${h.bloodRequired
      .map(
        (r, i) =>
          `<div class="required-edit-row"><select data-required="${i}:group">${BLOOD_GROUPS.map(
            g => `<option ${g === r.group ? 'selected' : ''}>${g}</option>`
          ).join(
            ''
          )}</select><input data-required="${i}:units" type="number" min="1" value="${
            r.units
          }"><button class="remove-button" data-action="remove-blood-requirement" data-index="${i}" type="button">Remove</button></div>`
      )
      .join(
        ''
      )}</div><button class="add-button" data-action="add-blood-requirement" type="button">+ Add requirement</button>${saveButton(
      key
    )}`,
    key
  );
};

const renderAdmin = () => {
  hospitals = readHospitals();
  const h = currentAdmin();
  document.querySelector('#adminView').innerHTML =
    header(true) +
    `<main class="page-shell"><section class="page-heading"><div><span class="eyebrow">Hospital control room</span><h1>${escapeHtml(
      h.name
    )}</h1><p class="muted">${escapeHtml(h.address)}, ${escapeHtml(
      h.city
    )} | ${escapeHtml(h.phone)}</p></div></section><div class="admin-grid">${[
      'beds',
      'emergency',
      'blood',
      'equipment',
      'doctors',
      'required',
    ]
      .map(key => adminSection(h, key))
      .join('')}</div></main>`;
  bindAdmin();
};

const adminNumber = id =>
  Math.max(0, Number(document.querySelector(`[data-field="${id}"]`)?.value) || 0);

const saveAdminSection = key => {
  const h = currentAdmin();
  if (key === 'beds') {
    const ia = adminNumber('icuAvailable'),
      it = adminNumber('icuTotal'),
      ga = adminNumber('generalAvailable'),
      gt = adminNumber('generalTotal');
    if (ia > it || ga > gt)
      return (document.querySelector('[data-error="beds"]').textContent =
        'Available beds cannot exceed total beds.');
    h.beds = {
      icuAvailable: ia,
      icuTotal: it,
      generalAvailable: ga,
      generalTotal: gt,
    };
  }
  if (key === 'emergency') {
    const c = adminNumber('capacity'),
      a = adminNumber('admitted');
    if (a > c)
      return (document.querySelector('[data-error="emergency"]').textContent =
        'Admitted patients cannot exceed capacity.');
    h.emergency = { capacity: c, admitted: a };
  }
  if (key === 'blood')
    BLOOD_GROUPS.forEach(g => (h.blood[g] = adminNumber(`blood-${g}`)));
  if (key === 'equipment')
    h.equipment = [...document.querySelectorAll('[data-equipment-name]')].map(
      (el, i) => ({
        name: el.value.trim() || 'Equipment',
        status: document.querySelector(`[data-equipment-status="${i}"]`).value,
      })
    );
  if (key === 'doctors')
    h.doctors = h.doctors.map((d, i) => ({
      ...d,
      name:
        document.querySelector(`[data-doctor="${i}:name"]`).value.trim() ||
        'Unnamed doctor',
      department: document.querySelector(`[data-doctor="${i}:department"]`)
        .value,
      experienceYears: adminNumber(`doctor-${i}`),
      status: document.querySelector(`[data-doctor="${i}:status"]`).value,
    }));
  if (key === 'required')
    h.bloodRequired = h.bloodRequired.map((r, i) => ({
      group: document.querySelector(`[data-required="${i}:group"]`).value,
      units: Math.max(
        1,
        Number(document.querySelector(`[data-required="${i}:units"]`).value) || 1
      ),
    }));

  writeHospitals(hospitals);
  toast('Changes saved and synced.');
  renderAdmin();
};

const bindAdmin = () => {
  const view = document.querySelector('#adminView');
  view.onclick = e => {
    const btn = e.target.closest('[data-action],[data-save],[data-nav]');
    if (!btn) return;
    if (btn.dataset.action === 'logout') return logout();
    if (btn.dataset.nav) {
      e.preventDefault();
      return showView(btn.dataset.nav);
    }

    const h = currentAdmin(),
      action = btn.dataset.action;

    if (action === 'add-doctor') {
      h.doctors.push({
        name: 'New doctor',
        department: 'General Surgery',
        experienceYears: 0,
        status: 'available',
      });
      writeHospitals(hospitals);
      return renderAdmin();
    }
    if (action === 'add-equipment') {
      h.equipment.push({ name: 'New equipment', status: 'available' });
      writeHospitals(hospitals);
      return renderAdmin();
    }
    if (action === 'add-blood-requirement') {
      h.bloodRequired.push({ group: 'O-', units: 1 });
      writeHospitals(hospitals);
      return renderAdmin();
    }
    if (action === 'remove-doctor') {
      h.doctors.splice(+btn.dataset.index, 1);
      writeHospitals(hospitals);
      return renderAdmin();
    }
    if (action === 'remove-equipment') {
      h.equipment.splice(+btn.dataset.index, 1);
      writeHospitals(hospitals);
      return renderAdmin();
    }
    if (action === 'remove-blood-requirement') {
      h.bloodRequired.splice(+btn.dataset.index, 1);
      writeHospitals(hospitals);
      return renderAdmin();
    }
    if (btn.dataset.save) saveAdminSection(btn.dataset.save);
  };
};

const renderRequests = () => {
  const h = currentAdmin(),
    term = (document.querySelector('#requestSearch')?.value || '').toLowerCase(),
    rows = readRequests()
      .filter(
        r =>
          r.hospitalId === h.id &&
          (requestFilter === 'all' || r.urgency.toLowerCase() === requestFilter) &&
          (!term ||
            `${r.patientName} ${r.userName} ${r.reason}`
              .toLowerCase()
              .includes(term))
      )
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  document.querySelector('#requestsView').innerHTML =
    header(true) +
    `<main class="page-shell"><section class="page-heading"><div><span class="eyebrow">Incoming care requests</span><h1>Emergency requests</h1><p class="muted">Requests received by ${escapeHtml(
      h.name
    )}</p></div></section><section class="request-toolbar panel"><div class="filter-tabs">${[
      'all',
      'high',
      'medium',
      'low',
    ]
      .map(
        s =>
          `<button class="${
            requestFilter === s ? 'active' : ''
          }" data-urgency="${s}" type="button">${
            s[0].toUpperCase() + s.slice(1)
          }</button>`
      )
      .join(
        ''
      )}</div><input id="requestSearch" value="${escapeHtml(
      term
    )}" type="search" placeholder="Search patient or requester"></section><section class="request-list">${
      rows.length
        ? rows
            .map(
              r =>
                `<article class="request-card"><div class="request-top"><div><h2>${escapeHtml(
                  r.patientName
                )}</h2><p class="request-meta">Requested by ${escapeHtml(                   r.userName                 )} \vert{}${escapeHtml(r.contact)} | ${new Date(                   r.timestamp                 ).toLocaleString('en-IN')}</p></div>${pill(
                  r.urgency.toLowerCase(),
                  r.urgency
                )}</div><p class="request-reason">${escapeHtml(
                  r.reason
                )}</p></article>`
            )
            .join('')
        : '<div class="empty-state">No emergency requests have been received.</div>'
    }</section></main>`;
  bindRequests();
};

const bindRequests = () => {
  const view = document.querySelector('#requestsView');
  view.onclick = e => {
    const btn = e.target.closest('[data-action],[data-nav],[data-urgency]');
    if (!btn) return;
    if (btn.dataset.action === 'logout') return logout();
    if (btn.dataset.nav) {
      e.preventDefault();
      return showView(btn.dataset.nav);
    }
    if (btn.dataset.urgency) {
      requestFilter = btn.dataset.urgency;
      renderRequests();
    }
  };
  view.querySelector('#requestSearch').oninput = renderRequests;
};

const initLogin = () => {
  document.querySelector('#hospitalSelect').innerHTML = hospitals
    .map(h => `<option value="${h.id}">${escapeHtml(h.name)} - ${escapeHtml(h.city)}</option>`)
    .join('');

  document.querySelectorAll('[data-role]').forEach(
    tab =>
      (tab.onclick = () => {
        role = tab.dataset.role;
        document
          .querySelectorAll('[data-role]')
          .forEach(x => x.classList.toggle('active', x === tab));
        document
          .querySelector('#userFields')
          .classList.toggle('hidden', role !== 'user');
        document
          .querySelector('#adminFields')
          .classList.toggle('hidden', role !== 'admin');
      })
  );

  document.querySelector('#loginForm').onsubmit = e => {
    e.preventDefault();
    if (role === 'user') {
      saveSession({
        role: 'user',
        userName: document.querySelector('#userName').value.trim() || 'Guest user',
      });
      return showView('user');
    }
    const h = hospitals.find(
      x => x.id === document.querySelector('#hospitalSelect').value
    );
    if (document.querySelector('#secretCode').value.trim() !== h.secretCode)
      return (document.querySelector('#loginError').textContent =
        'That secret code does not match this hospital.');

    saveSession({ role: 'admin', hospitalId: h.id });
    showView('admin');
  };
};

window.addEventListener('storage', e => {
  if (e.key === HOSPITALS_KEY || e.key === 'hrs_sync') {
    hospitals = readHospitals();
    if (activeView === 'user') renderUser();
    if (activeView === 'admin') renderAdmin();
  }
});

window.addEventListener('hrs-hospitals-updated', () => {
  hospitals = readHospitals();
  if (activeView === 'user') renderUser();
});

initLogin();
const current = session();
showView(
  current?.role === 'admin'
    ? 'admin'
    : current?.role === 'user'
    ? 'user'
    : 'login'
);