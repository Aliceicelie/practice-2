const kirby = document.getElementById('kirby')
const viewAllBtn = document.getElementById('allBtn')
const content = document.getElementById('boxForContainers')
const jobr = document.getElementById('jobr')
const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')
const ul = document.getElementById('ul')
const close = document.getElementById('close')
const clear = document.getElementById('clear')
const data = `
        [{"Id":"a0T2h000001LqxuEAC","Name":"Set Up","GW_Volunteers__Location_City__c":"Jacksonville","GW_Volunteers__Campaign__c":"7012h000000WgJCAA0"},{"Id":"a0T2h000001LlsMEAS","Name":"CEO of Age International","GW_Volunteers__Location_City__c":"New York, ","GW_Volunteers__Location_Street__c":"Green Street","GW_Volunteers__Skills_Needed__c":"Computer usage, Event Planning, basic accounting","GW_Volunteers__Description__c":"Age International, part of Age UK, is a humanitarian and development agency that promotes the rights and responds to the needs of vul...","GW_Volunteers__Campaign__c":"7012h000000WcQ1AAK"},{"Id":"a0T2h000001Llt0EAC","Name":"Advertise a site using computer","GW_Volunteers__Skills_Needed__c":"Computer usage","GW_Volunteers__Description__c":"Requires computer usage. Tell people about our site. Its abilities and how it helps world.","GW_Volunteers__Campaign__c":"7012h000000WcQzAAK"},{"Id":"a0T2h000001LlsWEAS","Name":"Advertise a site","GW_Volunteers__Description__c":"Tell people about our site. Its abilities and how it helps world.","GW_Volunteers__Campaign__c":"7012h000000WcQzAAK"},{"Id":"a0T2h000001LlsREAS","Name":"Advertise a company","GW_Volunteers__Description__c":"Help us to engage people to our company. Tell them what we do here.","GW_Volunteers__Campaign__c":"7012h000000WcQzAAK"},{"Id":"a0T2h000001Lqy4EAC","Name":"Auction/ Raffle Attendees","GW_Volunteers__Location_City__c":"Jacksonville","GW_Volunteers__Campaign__c":"7012h000000WgJCAA0"},{"Id":"a0T2h000001Lqy9EAC","Name":"Lunch Serving","GW_Volunteers__Location_City__c":"Jacksonville","GW_Volunteers__Skills_Needed__c":"Event Support","GW_Volunteers__Campaign__c":"7012h000000WgJCAA0"},{"Id":"a0T2h000001LqyAEAS","Name":"Clean-up","GW_Volunteers__Location_City__c":"Jacksonville","GW_Volunteers__Skills_Needed__c":"Manual Labor","GW_Volunteers__Campaign__c":"7012h000000WgJCAA0"},{"Id":"a0T2h000001LqxzEAC","Name":"Check-in","GW_Volunteers__Location_City__c":"Jacksonville","GW_Volunteers__Campaign__c":"7012h000000WgJCAA0"},{"Id":"a0T2h000001LqyEEAS","Name":"Safety Volunteers","GW_Volunteers__Location_City__c":"Jacksonville","GW_Volunteers__Campaign__c":"7012h000000WgJCAA0"}]
`;

const campaignsJSON = `
[{"Id":"7012h000000WcQ1AAK","Name":"Default Jobs"},          {"Id":"7012h000000WcQzAAK","Name":"Advertisement"}, {"Id":"7012h000000WgJCAA0","Name":"Vets Cup 2022 Jacksonville"}]
`

const campaigns = JSON.parse(campaignsJSON)

ul.innerHTML = campaigns.map(filt => `
    <div class="chk">
        <label>
            <input type="checkbox" class="campaignChBox" data-campaign-id=${filt.Id}>
            ${filt.Name}
        </label>
    </div>
    `).join('')
viewAllBtn.addEventListener('click', showHide)

const jobs = JSON.parse(data)

const campaignsChBoxes = document.querySelectorAll('.campaignChBox');
[...campaignsChBoxes].map(item => {
    item.addEventListener('click', renderList)
})

renderList()

function renderList() {
    console.log('renderList');

    let displayedJobs = [...jobs];

    const activeCampaigns = [];
    [...campaignsChBoxes].map(checkBox => {
            console.log(checkBox.checked);
            
        if (checkBox.checked) {
            console.log(checkBox.dataset.campaignId);
            activeCampaigns.push(checkBox.dataset.campaignId)
        }
    })
    // [...campaignsChBoxes].map()
    console.log(activeCampaigns);
    if (activeCampaigns.length > 0) {
        displayedJobs = displayedJobs.filter(job => activeCampaigns.includes(job.GW_Volunteers__Campaign__c))
    }
    displayedJobs = displayedJobs.filter(job => job.Name.toLowerCase().includes(searchInput.value.toLowerCase()))

    const isExpanded = +viewAllBtn.dataset.isExpanded
    displayedJobs = isExpanded ?
        displayedJobs :
        displayedJobs.slice(0, 5)
    
    jobr.innerHTML = displayedJobs.map(job => `
    <div class='job'>
        <h1><a href='#'>${job.Name}</a></h1>
        <p>
            ${job.GW_Volunteers__Location_City__c || ''} 
            ${job.GW_Volunteers__Location_Street__c || ''}
        </p>
    </div>
`).join('')
}

function showHide() {
    viewAllBtn.dataset.isExpanded = +viewAllBtn.dataset.isExpanded ? '0' : '1'
    renderList()
}
searchBtn.addEventListener('click', renderList)
searchInput.addEventListener('input', renderList)

close.addEventListener('click', clearSearch)
clear.addEventListener('click', clearFilters)

function clearFilters() {
    [...campaignsChBoxes].map(item => {
        item.checked = false
    })
    renderList()
}

function clearSearch() {
    searchInput.value = ''
    renderList()
}