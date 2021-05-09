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

        ]},

    {"name":"PLATINUM", "entries":[

        /* Analog Devices */
        {"icon": "https://www.gnuradio.org/grcon/grcon20/sponsors/Analog_Devices_Logo.svg",
        "url": "https://www.analog.com/",
        "blurb":"Analog Devices Analog Devices (Nasdaq: ADI) is the leading global high-performance analog technology company dedicated to solving the toughest engineering challenges. We enable our customers to interpret the world around us by intelligently bridging the physical and digital with unmatched technologies that sense, measure, power, connect and interpret."}

        ]},

    {"name":"GOLD", "entries":[

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

var sa = document.getElementsByClassName("footer ");    // footer section
sa[0].innerHTML = "<br>";   // wipe out footer

var c_loc = window.location.href;
if (c_loc != ("file:///home/barry/js-html/Test4.html"))      // **TEST** https://events.gnuradio.org/event/8/page/5-sponsors
    {
    // build sponsor section of footer
    sa[0].innerHTML = '<br><hr><h3 class="u_cent">Our Sponsors</h3><br>';
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
                var _br = document.createElement("BR");
                pc[0].appendChild(_br);
                }
            }
        }
    }   // end Sponsors page content

/* create last line of footer */
var ftr = document.createElement("BR");
sa[0].appendChild(ftr);

var ftr1 = document.createElement("DIV");
ftr1.innerHTML = '<img src="https://events.gnuradio.org/images/indico_small.png" style="width:100px;height:40px;">';

var ftr2 = document.createElement("SPAN");
ftr2.innerHTML = "Powered by Indico v2.3.4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Need help with GRCon? <a href=\"mailto:grcon@gnuradio.org\">Contact organisers</a> | Need help with this page? <a href=\"mailto:indico@sysmail.gnuradio.org\">Contact webmaster</a>";
ftr1.appendChild(ftr2);
sa[0].appendChild(ftr1);

var ftr = document.createElement("BR");
sa[0].appendChild(ftr);





