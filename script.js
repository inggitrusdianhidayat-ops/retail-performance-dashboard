const ctx = document.getElementById('salesChart');

new Chart(ctx, {
type: 'bar',
data: {
labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
datasets: [{
label: 'Sales (Million Rp)',
data: [120,150,135,180,210,250,220]
}]
},
options: {
responsive:true
}
});
