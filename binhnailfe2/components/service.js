var data1 = [
        { "service": "Acrylic New Set", "price": "30+" },
        { "service": "Acrylic Refill", "price": "25+" },
        { "service": "Biogel New Set", "price": "50" },
        { "service": "Biogel Refill", "price": "35" },
        { "service": "Biogel Overlay", "price": "45" },
        { "service": "Biogel Overlay Refill", "price": "30+" },
        { "service": "Ombre by Airbrush", "price": "10" },
        { "service": "Ombre by Sparkle", "price": "8+" },
        { "service": "Shellac or Color Gel on Top", "price": "10" },
        { "service": "Dipping", "price": "45" },
        { "service": "Dipping with Tip", "price": "55" },
        { "service": "Take off Nail & Change Shellac", "price": "35" },
        { "service": "Take off Nail & Manicure Shellac", "price": "45" },
        { "service": "Polish Change for Finger Nails", "price": "10+" },
        { "service": "Polish Change for Toe Nails", "price": "15+" },
        { "service": "Nail Repair", "price": "5+" },
        { "service": "Nail Removal", "price": "15" },
        { "service": "Nail Removal and Manicure", "price": "30" },
        { "service": "Shellac Removal - Hand", "price": "10" },
        { "service": "Shellac Removal - Feet", "price": "10" },
        { "service": "Classic Manicure", "price": "20" },
        { "service": "Classic Pendicure", "price": "30" },
        { "service": "Classic Mani & Pedi", "price": "45" },
        { "service": "Shellac Manicure", "price": "35" },
        { "service": "Shellac Pendicure", "price": "45" },
        { "service": "Shellac Mani & Pedi", "price": "75" },
        { "service": "Color only hands", "price": "25" },
        { "service": "Color only feet", "price": "25" },
        { "service": "Nail Art & French design", "price": "5+" }
    ]


var data2 =  [
        { "service": "Full Legs", "price": "45" },
        { "service": "Full Legs and Bikini", "price": "55" },
        { "service": "Half Legs (lower)", "price": "25" },
        { "service": "Half Legs (Upper)", "price": "35" },
        { "service": "Full Arms", "price": "30" },
        { "service": "Falf Arms", "price": "20" },
        { "service": "Under Amrs", "price": "12" },
        { "service": "Brazillian", "price": "40" },
        { "service": "Bikini", "price": "20" },
        { "service": "Sidebums", "price": "10" },
        { "service": "Chin", "price": "6" },
        { "service": "Eyebrows Cleanup", "price": "80" },
        { "service": "Eyebrows Shapping", "price": "10" },
        { "service": "Upper Lip", "price": "6" },
        { "service": "Full Face", "price": "30" },
        { "service": "Belly", "price": "20" },
        { "service": "Back", "price": "40" },
        { "service": "Chest", "price": "35" },
        { "service": "Body", "price": "200" }
    ]

var data3 =  [
        { "service": "One Hour Massage", "price": "65" },
        { "service": " Thirty Minute Massage", "price": "40" },
        { "service": " Hot Stone Manicure One Hour", "price": "80" },
        { "service": " Foot Reflexology Fifteen Minutes", "price": "15" }
    ]

var data4 = [
        { "service": "Basic Facial", "price": "45" },
        { "service": "Acne Facial Treatment", "price": "70" },
        { "service": "Deep Cleaning Facial", "price": "55" },
        { "service": "Reydrate Facial", "price": "80" }
    ]
var data5 = [
        { "service": "Manicure", "price": "15" },
        { "service": "Pendicure", "price": "20+" },
        { "service": "Mani & Pedi", "price": "30+" }
    ]
var data6 =  [
        { "service": "Eyebrow Tinting", "price": "15" },
        { "service": "Tinting+ Waxing", "price": "20" },
        { "service": "Eyelash Extension", "price": "100" },
        { "service": "Eyelash Refill", "price": "60" },
        { "service": "Eyelash Tinting", "price": "25" },
        { "service": "Hand Paraffin", "price": "10" },
        { "service": "Feet Paraffin", "price": "12" },
        { "service": "Volume F/S", "price": "130" },
        { "service": "Refill", "price": "80" },
        { "service": "Mega Volume", "price": "160" },
        { "service": "Refill", "price": "110" }
    ]


var data7 = [
        { "service": "Manicure Classic", "price": "20" },
        { "service": "Manicure Shella", "price": "35" },
        { "service": "Pendicure Classic", "price": "30" },
        { "service": "Pendicure Shella", "price": "45" },
        { "service": "Mani & Pedi Classic", "price": "45" },
        { "service": "Mani & Pedi Shella", "price": "75" },
        { "service": "Hands Color", "price": "25" },
        { "service": "Feet Color", "price": "25" },
        { "service": "Art & French", "price": "5+" }
    ]
displayData("artificial",data1)
displayData("waxing",data2)
displayData("facial",data4)
displayData("mani",data7)
displayData("massage",data3)
displayData("kids",data5)
displayData("others",data6)

function displayData(htmlID,data){
    var x = document.getElementById(htmlID);
    data.forEach(e => { 
        x.innerHTML += "<div class = 'col-lg-4 col-md-6 col-sm-12'><div class = 'row'><div class = 'service-lf'>" + e.service+"</div><div class = 'service-rt'>$" + e.price+"</div></div><hr></div>"
    })
}
