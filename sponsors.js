/* sponsors.js */

"use strict"

/*

get footer pointer
store <br>
if (window.location.href != ("https://events.gnuradio.org/event/8/page/5-sponsors"))
    {
    build sponsor section of footer
    }
else
    {
    build Sponsors page content
    }
build last line of footer

*/

var myObj, i, j;
myObj = {
  "levels": [
    {"name":"DIAMOND", "entries":[


        /* SETI Institute */
        {"icon": "https://www.gnuradio.org/grcon/grcon20/sponsors/seti_institute.png",
        "url": "https://www.seti.org/",
        "blurb": "The SETI Institute’s mission is to explore, understand, and explain the origin and nature of life in the universe and the evolution of intelligence. Founded in 1984, the SETI Institute, a 501 ©(3) nonprofit scientific research institute headquartered in Mountain View, California, employs more than 130 scientists, educators, and administrative staff. Work at the SETI Institute is anchored by three centers: the Carl Sagan Center for the Study of Life in the Universe (research), the Center for Education and the Center for Outreach. The SETI Institute operates the Allen Telescope Array, a 42-element radio array consisting of 6-meter dishes, at the Hat Creek Radio Observatory. The SETI Institute is a key research contractor to NASA and the National Science Foundation, and collaborates with industry partners throughout Silicon Valley and beyond. As of 2020, the Institute will manage contracts, grants, and related administration for the GNU Radio project, and engender collaboration with the community around shared interests in science, engineering, and education."}
        ]},

    {"name":"PLATINUM", "entries":[

        /* Analog Devices */
        {"icon": "https://www.gnuradio.org/grcon/grcon20/sponsors/Analog_Devices_Logo.svg",
        "url": "https://www.analog.com/",
        "blurb":"Analog Devices Analog Devices (Nasdaq: ADI) is the leading global high-performance analog technology company dedicated to solving the toughest engineering challenges. We enable our customers to interpret the world around us by intelligently bridging the physical and digital with unmatched technologies that sense, measure, power, connect and interpret."},
        ]},

    {"name":"GOLD", "entries":[]},
    {"name":"SILVER", "entries":[]},
    {"name":"PATRON", "entries":[
        {"icon": "https://events.gnuradio.org/event/8/images/6-DCS_logo.png",
        "url":"https://github.com/duggabe",
        "blurb":"Duggan Computer Systems is a software consulting firm specializing in email security. Barry Duggan also is involved in the GNU Radio project, and is currently the Documentation Lead."}
        ]}
  ]
}

var sa = document.getElementsByClassName("footer ");    // footer section
sa[0].innerHTML = "<br>";   // wipe out footer

var c_loc = window.location.href;
if (c_loc != ("https://www.gnuradio.org/indico/Test4.html"))      // **TEST** https://events.gnuradio.org/event/8/page/5-sponsors
    {
    // build sponsor section of footer
    sa[0].innerHTML = '<br><hr><h3 class="u_cent">Our Sponsors</h3><br>';
    /* create table */
    var tbl = document.createElement("TABLE");
    /* create header row */
    var t_tr = document.createElement("TR");
    for (i in myObj.levels) 
        {
        var _lel = myObj.levels[i].entries.length;  // how many entries
        if (_lel > 0)
            {
            var t_th = document.createElement("TH");
            if (_lel > 1)
                t_th.setAttribute("colspan", _lel);
            t_th.innerHTML = myObj.levels[i].name;
            t_tr.appendChild(t_th);
            }
        }
    tbl.appendChild(t_tr);
    /* create data row */
    var t_tr = document.createElement("TR");
    for (i in myObj.levels) 
        {
        for (j in myObj.levels[i].entries) 
            {
            var t_td = document.createElement("TD");
            var anchor = "<a href=\"" + myObj.levels[i].entries[j].url + "\">" +
                "<img src=\"" + myObj.levels[i].entries[j].icon  + "\" style=\"width:75px;height:37px;\"></a>";
            console.log (anchor);
            t_td.innerHTML = anchor;
            t_tr.appendChild(t_td);
            tbl.appendChild(t_tr);
            }
        }
    tbl.appendChild(t_tr);
    /* attach table */
    sa[0].appendChild(tbl);
    }   // end sponsor section of footer
else
    {
    // build Sponsors page content
    var i, j;
    var pc = document.getElementsByClassName("page-content");    // page-content
    var txt = pc[0].innerHTML;      // get the existing content
    for (i in myObj.levels) 
        {
        var _lel = myObj.levels[i].entries.length;  // how many entries
        if (_lel > 0)
            {
            txt += "<h2>" + myObj.levels[i].name + "</h2>";
            txt += "<hr><br>";
            for (j in myObj.levels[i].entries) 
                {
            var anchor = "<a href=\"" + myObj.levels[i].entries[j].url + "\">" +
                "<img src=\"" + myObj.levels[i].entries[j].icon  + "\" style=\"max-width:300px;max-height:150px;\"></a>";
                txt += anchor + "<br>";
                txt += myObj.levels[i].entries[j].blurb + "<br><br>";
                }
            }
        }
    pc[0].innerHTML = txt;
    }   // end Sponsors page content

/* create last line of footer */
var ftr = document.createElement("BR");
sa[0].appendChild(ftr);

var ftr1 = document.createElement("DIV");
ftr1.innerHTML = '<img src="https://events.gnuradio.org/images/indico_small.png" style="width:100px;height:40px;">';

var ftr2 = document.createElement("SPAN");
ftr2.innerHTML = "Powered by Indico v2.3.4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Need help with GRCon? <a href=\"mailto:grcon@gnuradio.org\">Contact organisers</a> | Need help with this page? <a href=\"mailto:indico@sysmail.gnuradio.org\">Contact webmaster</a>";
ftr1.appendChild(ftr2);
sa[0].appendChild(ftr1);

var ftr = document.createElement("BR");
sa[0].appendChild(ftr);





