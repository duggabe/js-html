/* sponsors.js */

/* 22 May 2021 - add timezone offset from UTC */

"use strict"

var myObj, i, j;
myObj = {
  "levels": [
    {"name":"DIAMOND", "entries":[

        /* NI / Ettus Research */
        {"icon":"https://events.gnuradio.org/event/8/images/12-ettus-logo.png",
        "icon_w":280,
        "icon_h":103,
        "url":"https://www.ettus.com/",
        "blurb":"Ettus Research, an NI brand, is the world’s leading supplier of software-defined radio platforms, combining ease of use and a robust open-source software community. From wireless research to deployment, we empower you with the SDR tools, systems, and support you need to bring the next generation of wireless technology to life. It’s time. Let’s Engineer Ambitiously™."}

        ]},

    {"name":"PLATINUM", "entries":[

        /* Analog Devices */
        {"icon":"https://www.gnuradio.org/grcon/grcon20/sponsors/Analog_Devices_Logo.svg",
        "icon_w":236,
        "icon_h":95,
        "url":"https://www.analog.com/",
        "blurb":"Analog Devices Analog Devices (Nasdaq: ADI) is the leading global high-performance analog technology company dedicated to solving the toughest engineering challenges. We enable our customers to interpret the world around us by intelligently bridging the physical and digital with unmatched technologies that sense, measure, power, connect and interpret."},

        /* OpenCPI */
        {"icon":"https://events.gnuradio.org/event/8/images/13-opencpi2.png",
        "icon_w":400,
        "icon_h":200,
        "url":"https://www.opencpi.org/",
        "blurb":"Open Component Portability Infrastructure (OpenCPI) is an open source software (OSS) framework for developing and executing component-based applications on heterogeneous embedded systems. As a framework for development and execution, OpenCPI supports defining, implementing, building and testing components, as well as executing applications based on those components in the targeted embedded systems.  By targeting heterogeneous systems, the framework supports development and execution across diverse processing technologies including GPPs (general purpose processors), FPGA (field programmable gate arrays), and GPUs (graphics processing units) assembled into mixed systems."},

        /* Epiq Solutions */
        {"icon": "https://www.gnuradio.org/grcon/grcon20/sponsors/epiq.png",
        "icon_w":862,
        "icon_h":564,
        "url":"https://epiqsolutions.com/",
        "blurb":"Epiq Solutions develops cutting edge RF tools that provide situational awareness and detailed insight into RF environments to identify and take action against wireless threats. With more than a decade serving government-focused industries, Epiq Solutions understands how important speed, cost, and performance are for defense and security applications. Our radically small, state-of-the-art SDR transceiver modules and turnkey RF sensing tools lead the way in size, weight, and low-power consumption. Whether the need is to develop mission-critical defense communications for the battlefield or to protect sensitive information, Epiq Solutions is the trusted RF solution provider."}


        ]},

    {"name":"GOLD", "entries":[

        /* Peraton Labs */
        {"icon":"https://events.gnuradio.org/event/8/images/11-Peraton%20Labs%20logo-trimmed.png",
        "icon_w":1236,
        "icon_h":619,
        "url":"https://www.peratonlabs.com/",
        "blurb":"What matters to our customers, matters to us. ​We create new technologies, advance emerging technologies and deliver innovative solutions that work at scale and in complex, real-world environments—making an impact in defense, communications, energy, transportation, finance and life sciences.​"},

        /* BlackLynx */
        {"icon": "https://events.gnuradio.org/event/8/images/17-blacklynx_rect.png",
        "icon_w":1007,
        "icon_h":748,
        "url":"https://www.blacklynx.tech/",
        "blurb":"BlackLynx has focused primarily on providing mission critical edge compute for national security customers. Whether processing data on board a platform, the data center, or cloud, BlackLynx delivers the optimal solution. The BlackLynx team consists of highly technical programmers and device experts capable of solving the most difficult mission challenges."},

        /* Xilinx */
        {"icon":"https://www.gnuradio.org/grcon/grcon20/sponsors/xilinx.png",
        "icon_w":1750,
        "icon_h":355,
        "url":"https://www.xilinx.com/",
        "blurb":"Xilinx is the inventor of the FPGA, programmable SoCs, and now, the Adaptive Compute Acceleration Platform (ACAP). Our highly-flexible programmable silicon, enabled by a suite of advanced software and tools, enables rapid innovation across a wide span of industries and technologies, including high performance Software Defined Radio applications (from Direct RF integration to real-time Signal Processing and Machine Learning)."},

        /* Microsoft */
        {"icon":"https://events.gnuradio.org/event/8/images/16-Microsoft.png",
        "icon_w":216,
        "icon_h":46,
        "url":"https://www.microsoft.com/",
        "blurb":"Our mission is to empower every person and every organization on the planet to achieve more."}

        ]},

    {"name":"SILVER", "entries":[

        ]},

    {"name":"PATRON", "entries":[

        /* SkySafe */
        {"icon":"https://www.gnuradio.org/grcon/grcon19/sponsors/skysafe.svg",
        "icon_w":766,
        "icon_h":766,
        "url":"https://www.skysafe.io/",
        "blurb":"SkySafe provides world-class drone defense and airspace control solutions. Founded in 2015 in San Diego, CA, our team consists of drone experts from MIT, UC San Diego, the Air Force Research Lab, and more. Our industry and intellectual experience includes leaders from the fields of security research, RF engineering, academia, and the military. We are a collection of diverse, capable, and hard working professionals who enjoy attacking the hardest challenges–we also have a lot of fun."},

        /* Duggan Computer Systems */
        {"icon": "https://events.gnuradio.org/event/8/images/6-DCS_logo.png",
        "icon_w":308,
        "icon_h":144,
        "url":"https://github.com/duggabe",
        "blurb": "Duggan Computer Systems is a software consulting firm specializing in email security. Barry Duggan also is involved in the GNU Radio project, and is currently the Documentation Lead."}

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
            t_th.setAttribute("class", "u_th");
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
            t_td.setAttribute("class", "u_td");
            var aspect = (myObj.levels[i].entries[j].icon_w / myObj.levels[i].entries[j].icon_h);
            var _td_h = 88 / aspect;
            var anchor = "<a href=\"" + myObj.levels[i].entries[j].url + "\">" +
                "<img src=\"" + myObj.levels[i].entries[j].icon  +
                "\" style=\"width:88px;height:" + _td_h + "px;\"></a>";
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
            _h2.setAttribute("class", "u_cent");
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
                var aspect = (myObj.levels[i].entries[j].icon_w / myObj.levels[i].entries[j].icon_h);
                var _td_h = 200 / aspect;
                var anchor = "<a href=\"" + myObj.levels[i].entries[j].url + "\">" +
                "<img src=\"" + myObj.levels[i].entries[j].icon  +
                "\" style=\"width:200px;height:" + _td_h + "px;\"></a>";
                // console.log (anchor);
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
  ftr2.innerHTML = "<img src=\"https://events.gnuradio.org/images/indico_small.png\" style=\"width:100px;height:40px;\">Powered by Indico v2.3.5";
  sa[0].appendChild(ftr2);

  /* add timezone offset */
  var tz = document.getElementsByClassName("timezone");
  var t1 = document.createTextNode(" (UTC - 4)");
  tz[0].appendChild(t1);
  }     // end found event/8
}   // end myFunction()

