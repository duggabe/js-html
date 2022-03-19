/* sponsors.js */

/* 19 March 2022  GRCon22 version */

"use strict"

const DIAMOND = 0;
const student = 3;      // not used right now

var myObj, i, j;
myObj = {
  "levels": [
    {"name":"DIAMOND", "entries":[

        ]},

    {"name":"PLATINUM", "entries":[

        ]},

    {"name":"GOLD", "entries":[

        ]},

    {"name":"SILVER", "entries":[

        ]},

    {"name":"PATRON", "entries":[

        ]}
  ]
}

document.body.onload = function() {myFunction()};

function myFunction() {

var w_loc = window.location.href;
var pos1 = w_loc.search("event/18");      // GRCon22
var pos2 = w_loc.search("Test");         // for testing
if ((pos1 > 0) || (pos2 > 0))
  {             // found event/18 or Test
  var sa = document.getElementsByClassName("footer "); // footer section (yes, it has a trailing space)
  sa[0].innerHTML = "<br>";   // wipe out footer
  var c_loc = window.location.href;
  var pos3 = c_loc.search("Test4");      // for testing the Sponsors page
  if ((c_loc != ("https://events.gnuradio.org/event/18/page/49-sponsorship-opportunities")) &&
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
    var _num_levels = myObj.levels.length;
    /* for each entry */
    for (let i = 0; i < (_num_levels-1); i++)       // do all except Patrons 
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
    for (let i = 0; i < (_num_levels-1); i++)       // do all except Patrons 
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

//    var _br = document.createElement("br");
//    sa[0].appendChild(_br);

    if ((myObj.levels[_num_levels-1].entries.length) > 0)
        {
        var _Ptitle = document.createElement("H5");             // header for Patrons
        _Ptitle.setAttribute("class", "u_cent");
        _Ptitle.innerHTML = "PATRONS";
        sa[0].appendChild(_Ptitle);
        }

    /* create table */
    var tbl = document.createElement("TABLE");
    tbl.setAttribute("class", "u_table");
    /* create data row */
    var t_tr = document.createElement("TR");
    t_tr.setAttribute("class", "u_trp");
    /* for each entry */
    for (let i = (_num_levels-1); i < _num_levels; i++)       // do Patrons 
        {
        for (j in myObj.levels[i].entries) 
            {
            /* create data element */
            var t_td = document.createElement("TD");
            t_td.setAttribute("class", "u_tdp");
            var aspect = (myObj.levels[i].entries[j].icon_w / myObj.levels[i].entries[j].icon_h);
            var _td_h = 66 / aspect;
            var anchor = "<a href=\"" + myObj.levels[i].entries[j].url + "\">" +
                "<img src=\"" + myObj.levels[i].entries[j].icon  +
                "\" style=\"width:66px;height:" + _td_h + "px;\"></a>";
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
            var _br = document.createElement("br");
            pc[0].appendChild(_br);
            var _hr = document.createElement("hr");
            pc[0].appendChild(_hr);
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
  ftr2.innerHTML = "<img src=\"https://events.gnuradio.org/images/indico_small.png\" style=\"width:100px;height:40px;\">Powered by Indico v3.0.3";
  sa[0].appendChild(ftr2);

  /* add timezone offset */
  var tz = document.getElementsByClassName("timezone");
  var t1 = document.createTextNode(" (UTC - 4)");
  tz[0].appendChild(t1);
  }     // end found event/18
}   // end myFunction()

