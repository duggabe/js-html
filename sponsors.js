/* sponsors.js */

/* 22 May 2021 - add timezone offset from UTC */

"use strict"

var myObj, i, j;
myObj = {
  "levels": [
    {"name":"DIAMOND", "entries":[

        ]},

    {"name":"PLATINUM", "entries":[

        /* Analog Devices */
        {"icon": "https://www.gnuradio.org/grcon/grcon20/sponsors/Analog_Devices_Logo.svg",
        "url": "https://www.analog.com/",
        "blurb":"Analog Devices Analog Devices (Nasdaq: ADI) is the leading global high-performance analog technology company dedicated to solving the toughest engineering challenges. We enable our customers to interpret the world around us by intelligently bridging the physical and digital with unmatched technologies that sense, measure, power, connect and interpret."},

        /* OpenCPI */
        {"icon": "https://images.squarespace-cdn.com/content/58d922bf86e6c087a9448c36/1490626085183-9ZDMXM17L560YQYLX592/opencpi_web_small.png",
        "url": "https://www.opencpi.org/",
        "blurb":"Open Component Portability Infrastructure (OpenCPI) is an open source software (OSS) framework for developing and executing component-based applications on heterogeneous embedded systems. As a framework for development and execution, OpenCPI supports defining, implementing, building and testing components, as well as executing applications based on those components in the targeted embedded systems.  By targeting heterogeneous systems, the framework supports development and execution across diverse processing technologies including GPPs (general purpose processors), FPGA (field programmable gate arrays), GPUs (graphics processing units) assembled into mixed systems."}

        ]},

    {"name":"GOLD", "entries":[

        /* Peraton Labs */
        {"icon": "https://events.gnuradio.org/event/8/images/10-Peraton%20Labs%20logo-full%20color.png",
        "url": "https://www.peratonlabs.com/",
        "blurb":"What matters to our customers, matters to us. ​We create new technologies, advance emerging technologies and deliver innovative solutions that work at scale and in complex, real-world environments—making an impact in defense, communications, energy, transportation, finance and life sciences.​"}

        ]},

    {"name":"SILVER", "entries":[

        ]},

    {"name":"PATRON", "entries":[

        /* Duggan Computer Systems */
        {"icon": "https://events.gnuradio.org/event/8/images/6-DCS_logo.png",
        "url":"https://github.com/duggabe",
        "blurb":"Duggan Computer Systems is a software consulting firm specializing in email security. Barry Duggan also is involved in the GNU Radio project, and is currently the Documentation Lead."}

        ]}
  ]
}

document.body.onload = function() {myFunction()};

function myFunction() {

var w_loc = window.location.href;
var pos1 = w_loc.search("event/8");      // GRCon21
var pos2 = w_loc.search("Test");         // for testing
if ((pos1 > 0) || (pos2 > 0))
  {             // found event/8 or Test
  var sa = document.getElementsByClassName("footer "); // footer section (yes, it has a trailing space)
  sa[0].innerHTML = "<br>";   // wipe out footer
  var c_loc = window.location.href;
  var pos3 = c_loc.search("Test4");      // for testing the Sponsors page
  if ((c_loc != ("https://events.gnuradio.org/event/8/page/5-sponsors")) &&
      (pos3 < 0))
    {
    // build sponsor section of footer
    sa[0].innerHTML = '<hr><h2 class="u_cent">Our Sponsors</h2>';
    /* create table */
    var tbl = document.createElement("TABLE");
    tbl.setAttribute("class", "u_table");
    /* create header row */
    var t_tr = document.createElement("TR");
    t_tr.setAttribute("class", "u_tr");
    /* for each entry */
    for (i in myObj.levels) 
        {
        var _lel = myObj.levels[i].entries.length;  // how many entries
        if (_lel > 0)
            {
            var t_th = document.createElement("TH");
            t_th.setAttribute("class", "u_tr");         // yes, this is intentional
            if (_lel > 1)
                t_th.setAttribute("colspan", _lel);
            /* create data row */
            t_th.innerHTML = myObj.levels[i].name;
            /* attach data to row */
            t_tr.appendChild(t_th);
            }
        }
    tbl.appendChild(t_tr);
    /* create data row */
    var t_tr = document.createElement("TR");
    /* for each entry */
    for (i in myObj.levels) 
        {
        for (j in myObj.levels[i].entries) 
            {
            /* create data element */
            var t_td = document.createElement("TD");
            t_td.setAttribute("class", "u_tr");         // yes, this is intentional
            var anchor = "<a href=\"" + myObj.levels[i].entries[j].url + "\">" +
                "<img src=\"" + myObj.levels[i].entries[j].icon  + "\" style=\"width:75px;height:37px;\"></a>";
            // console.log (anchor);
            t_td.innerHTML = anchor;
            t_tr.appendChild(t_td);
            tbl.appendChild(t_tr);
            }
        }
        /* attach row to table */
    tbl.appendChild(t_tr);
    /* attach table to content */
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
            var _h2 = document.createElement("h2");
            _h2.innerHTML = myObj.levels[i].name;
            pc[0].appendChild(_h2);
            var _hr = document.createElement("hr");
            pc[0].appendChild(_hr);
            var _br = document.createElement("br");
            pc[0].appendChild(_br);
            for (j in myObj.levels[i].entries) 
                {
                /* create table */
                var tbl = document.createElement("TABLE");
                tbl.setAttribute("class", "u_table2");
                /* create data row */
                var t_tr = document.createElement("TR");
                /* create data element */
                var t_td = document.createElement("TD");    // icon
                t_td.setAttribute("class", "u_tdl");
                var anchor = "<a href=\"" + myObj.levels[i].entries[j].url + "\">" +
                    "<img src=\"" + myObj.levels[i].entries[j].icon  + "\" style=\"max-width:200px;max-height:100px;\"></a>";
                t_td.innerHTML = anchor;
                t_tr.appendChild(t_td);
                var t_td = document.createElement("TD");    // blurb
                t_td.setAttribute("class", "u_tdr");
                t_td.innerHTML = myObj.levels[i].entries[j].blurb;
                t_tr.appendChild(t_td);
                /* attach row to table */
                tbl.appendChild(t_tr);
                /* attach table to content */
                pc[0].appendChild(tbl);
                }
            }
        }
    }   // end Sponsors page content

  /* create last two lines of footer */
  var ftr1 = document.createElement("DIV");
  ftr1.setAttribute("class", "u_cent");
  ftr1.innerHTML = "Need help with GRCon? <a href=\"mailto:grcon@gnuradio.org\">Contact organisers</a> | Need help with this page? <a href=\"mailto:indico@sysmail.gnuradio.org\">Contact webmaster</a>";
  sa[0].appendChild(ftr1);

  var ftr2 = document.createElement("DIV");
  ftr2.innerHTML = "<img src=\"https://events.gnuradio.org/images/indico_small.png\" style=\"width:100px;height:40px;\">Powered by Indico v2.3.4";
  sa[0].appendChild(ftr2);

  /* add timezone offset */
  var tz = document.getElementsByClassName("timezone");
  var t1 = document.createTextNode(" (UTC - 4)");
  tz[0].appendChild(t1);
  }     // end found event/8
}   // end myFunction()

