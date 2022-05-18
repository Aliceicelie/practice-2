const kirby = document.getElementById('kirby')
const content = document.getElementById('boxForContainers')
const search = document.getElementById('search')
const ul = document.getElementById('ul')
const data =
    [{"Id":"a0T2h000001LqxuEAC","Name":"Set Up","GW_Volunteers__Location_City__c":"Jacksonville","GW_Volunteers__Campaign__c":"7012h000000WgJCAA0"},{"Id":"a0T2h000001LlsMEAS","Name":"CEO of Age International","GW_Volunteers__Location_City__c":"New York, ","GW_Volunteers__Location_Street__c":"Green Street","GW_Volunteers__Skills_Needed__c":"Computer usage, Event Planning, basic accounting","GW_Volunteers__Description__c":"Age International, part of Age UK, is a humanitarian and development agency that promotes the rights and responds to the needs of vul...","GW_Volunteers__Campaign__c":"7012h000000WcQ1AAK"},{"Id":"a0T2h000001Llt0EAC","Name":"Advertise a site using computer","GW_Volunteers__Skills_Needed__c":"Computer usage","GW_Volunteers__Description__c":"Requires computer usage. Tell people about our site. Its abilities and how it helps world.","GW_Volunteers__Campaign__c":"7012h000000WcQzAAK"},{"Id":"a0T2h000001LlsWEAS","Name":"Advertise a site","GW_Volunteers__Description__c":"Tell people about our site. Its abilities and how it helps world.","GW_Volunteers__Campaign__c":"7012h000000WcQzAAK"},{"Id":"a0T2h000001LlsREAS","Name":"Advertise a company","GW_Volunteers__Description__c":"Help us to engage people to our company. Tell them what we do here.","GW_Volunteers__Campaign__c":"7012h000000WcQzAAK"},{"Id":"a0T2h000001Lqy4EAC","Name":"Auction/ Raffle Attendees","GW_Volunteers__Location_City__c":"Jacksonville","GW_Volunteers__Campaign__c":"7012h000000WgJCAA0"},{"Id":"a0T2h000001Lqy9EAC","Name":"Lunch Serving","GW_Volunteers__Location_City__c":"Jacksonville","GW_Volunteers__Skills_Needed__c":"Event Support","GW_Volunteers__Campaign__c":"7012h000000WgJCAA0"},{"Id":"a0T2h000001LqyAEAS","Name":"Clean-up","GW_Volunteers__Location_City__c":"Jacksonville","GW_Volunteers__Skills_Needed__c":"Manual Labor","GW_Volunteers__Campaign__c":"7012h000000WgJCAA0"},{"Id":"a0T2h000001LqxzEAC","Name":"Check-in","GW_Volunteers__Location_City__c":"Jacksonville","GW_Volunteers__Campaign__c":"7012h000000WgJCAA0"},{"Id":"a0T2h000001LqyEEAS","Name":"Safety Volunteers","GW_Volunteers__Location_City__c":"Jacksonville","GW_Volunteers__Campaign__c":"7012h000000WgJCAA0"}]
const jobs = [{"Id":"7012h000000WcQ1AAK","Name":"Default Jobs"},                {"Id":"7012h000000WcQzAAK","Name":"Advertisement"},   {"Id":"7012h000000WgJCAA0","Name":"Vets Cup 2022 Jacksonville"}]

content.innerHTML = data.map(job => `
    <div class='job'>
        <h1><a href='#'>${job.Name}</a></h1>
        <p>${job.GW_Volunteers__Location_City__c || ''} 
        ${job.GW_Volunteers__Location_Street__c || ''}</p>
    </div>
`).join('')

ul.innerHTML = jobs.map(filt => `
<div class="chk">
    <input type="checkbox">
    <label for="${filt.Name}">${filt.Name}</label>
</div>
`).join('')