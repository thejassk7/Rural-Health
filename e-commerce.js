// Medicines Database
const medicinesData = [
    {
        id: 1,
        name: 'Aciclovir (Zovirax)',
        category: 'antiviral',
        description: 'Antiviral medication for treating herpes infections',
        pharmacies: [
            { name: '1mg', url: 'https://www.1mg.com/drugs/zovirax-400-tablet-40930' },
            { name: 'Apollo Pharmacy', url: 'https://www.apollopharmacy.in/medicine/zovirax-400mg-tablet' },
            { name: 'Practo', url: 'https://www.practo.com/medicine-info/zovirax-400-mg-tablet-30618' }
        ]
    },
    {
        id: 2,
        name: 'Baclofen',
        category: 'muscle-relaxant',
        description: 'Muscle relaxant for treating muscle spasticity',
        pharmacies: [
            { name: '1mg', url: 'https://www.1mg.com/drugs/baclof-10-tablet-48246' },
            { name: 'Practo', url: 'https://www.practo.com/medicine-info/baclof-10-mg-tablet-30862' }
        ]
    },
    {
        id: 3,
        name: 'Calcipotriol',
        category: 'dermatology',
        description: 'Vitamin D derivative for treating psoriasis',
        pharmacies: [
            { name: '1mg', url: 'https://www.1mg.com/generics/calcipotriol-209488' },
            { name: 'Apollo Pharmacy', url: 'https://www.apollopharmacy.in/salt/CALCIPOTRIOL' },
            { name: 'Practo', url: 'https://www.truemeds.in/drug-salts/calcipotriol-3682' }
        ]
    },
    {
        id: 4,
        name: 'Amoxicillin',
        category: 'antibiotic',
        description: 'Broad-spectrum antibiotic for bacterial infections',
        pharmacies: [
            { name: '1mg', url: 'https://www.1mg.com/generics/amoxicillin-226' },
            { name: 'Apollo Pharmacy', url: 'https://www.apollopharmacy.in/medicine/amoxicillin' },
            { name: 'Practo', url: 'https://www.practo.com/medicine-info/amoxicillin' }
        ]
    },
    {
        id: 5,
        name: 'Azithromycin',
        category: 'antibiotic',
        description: 'Macrolide antibiotic for respiratory infections',
        pharmacies: [
            { name: '1mg', url: 'https://www.1mg.com/generics/azithromycin-281' },
            { name: 'Apollo Pharmacy', url: 'https://www.apollopharmacy.in/medicine/azithromycin' },
            { name: 'Practo', url: 'https://www.practo.com/medicine-info/azithromycin' }
        ]
    },
    {
        id: 6,
        name: 'Ibuprofen',
        category: 'pain-relief',
        description: 'NSAID for pain and fever relief',
        pharmacies: [
            { name: '1mg', url: 'https://www.1mg.com/generics/ibuprofen-230' },
            { name: 'Apollo Pharmacy', url: 'https://www.apollopharmacy.in/medicine/ibuprofen' },
            { name: 'Practo', url: 'https://www.practo.com/medicine-info/ibuprofen' }
        ]
    },
    {
        id: 7,
        name: 'Paracetamol',
        category: 'pain-relief',
        description: 'Acetaminophen for pain and fever',
        pharmacies: [
            { name: '1mg', url: 'https://www.1mg.com/generics/paracetamol-232' },
            { name: 'Apollo Pharmacy', url: 'https://www.apollopharmacy.in/medicine/paracetamol' },
            { name: 'Practo', url: 'https://www.practo.com/medicine-info/paracetamol' }
        ]
    },
    {
        id: 8,
        name: 'Dextromethorphan',
        category: 'cold-cough',
        description: 'Cough suppressant for cold and dry cough',
        pharmacies: [
            { name: '1mg', url: 'https://www.1mg.com/generics/dextromethorphan-272' },
            { name: 'Apollo Pharmacy', url: 'https://www.apollopharmacy.in/medicine/dextromethorphan' },
            { name: 'Practo', url: 'https://www.practo.com/medicine-info/dextromethorphan' }
        ]
    },
    {
        id: 9,
        name: 'Phenylephrine',
        category: 'cold-cough',
        description: 'Nasal decongestant for cold symptoms',
        pharmacies: [
            { name: '1mg', url: 'https://www.1mg.com/generics/phenylephrine-241' },
            { name: 'Apollo Pharmacy', url: 'https://www.apollopharmacy.in/medicine/phenylephrine' },
            { name: 'Practo', url: 'https://www.practo.com/medicine-info/phenylephrine' }
        ]
    },
    {
        id: 10,
        name: 'Omeprazole',
        category: 'digestion',
        description: 'Proton pump inhibitor for acid reflux',
        pharmacies: [
            { name: '1mg', url: 'https://www.1mg.com/generics/omeprazole-231' },
            { name: 'Apollo Pharmacy', url: 'https://www.apollopharmacy.in/medicine/omeprazole' },
            { name: 'Practo', url: 'https://www.practo.com/medicine-info/omeprazole' }
        ]
    },
    {
        id: 11,
        name: 'Metoclopramide',
        category: 'digestion',
        description: 'Anti-nausea and digestion support medication',
        pharmacies: [
            { name: '1mg', url: 'https://www.1mg.com/generics/metoclopramide-275' },
            { name: 'Apollo Pharmacy', url: 'https://www.apollopharmacy.in/medicine/metoclopramide' },
            { name: 'Practo', url: 'https://www.practo.com/medicine-info/metoclopramide' }
        ]
    },
    {
        id: 12,
        name: 'Antazoline',
        category: 'dermatology',
        description: 'Antihistamine for allergic skin reactions',
        pharmacies: [
            { name: '1mg', url: 'https://www.1mg.com/generics/antazoline-282' },
            { name: 'Apollo Pharmacy', url: 'https://www.apollopharmacy.in/medicine/antazoline' },
            { name: 'Practo', url: 'https://www.practo.com/medicine-info/antazoline' }
        ]
    }
];

// Render medicines with filter
function renderMedicines(filter = 'all') {
    const medicinesList = document.getElementById('medicinesList');
    const medicineCount = document.getElementById('medicineCount');
    
    let filtered = medicinesData;
    if (filter !== 'all') {
        filtered = medicinesData.filter(med => med.category === filter);
    }
    
    medicineCount.textContent = filtered.length;
    
    medicinesList.innerHTML = filtered.map(med => `
        <article class="hospital-card medicine-card">
            <div class="medicine-header">
                <h2 class="medicine-title">${escapeHtml(med.name)}</h2>
                <span class="medicine-category ${med.category}">
                    ${getCategoryLabel(med.category)}
                </span>
            </div>
            <p class="muted">${escapeHtml(med.description)}</p>
            <div class="pharmacy-links">
                ${med.pharmacies.map(pharmacy => `
                    <div class="pharmacy-link">
                        <span class="pharmacy-name">${escapeHtml(pharmacy.name)}</span>
                        <a href="${pharmacy.url}" target="_blank" class="button primary" style="padding: 6px 10px; font-size: 0.8rem; margin-left: 8px;">
                            View<span aria-hidden="true">→</span>
                        </a>
                    </div>
                `).join('')}
            </div>
        </article>
    `).join('');
}

// Get category label from category ID
function getCategoryLabel(category) {
    const labels = {
        'antiviral': 'Antiviral',
        'muscle-relaxant': 'Muscle Relaxant',
        'dermatology': 'Dermatology',
        'antibiotic': 'Antibiotic',
        'pain-relief': 'Pain Relief',
        'cold-cough': 'Cold & Cough',
        'digestion': 'Digestion'
    };
    return labels[category] || category;
}

// Filter medicines by category
function filterMedicines() {
    const selectedCategory = document.querySelector('input[name="medicineCategory"]:checked').value;
    renderMedicines(selectedCategory);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Clear filters
function clearMedicineFilters() {
    document.querySelector('input[value="all"][name="medicineCategory"]').checked = true;
    renderMedicines('all');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderMedicines('all');
    
    // Clear filters button handler
    const clearBtn = document.querySelector('[data-action="clear-medicine-filters"]');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearMedicineFilters);
    }
});
