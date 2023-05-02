# Using JavaScript to modify HTML pages

This repo shows methods to modify HTML pages dynamically using JavaScript. As an example, the JS for the GNU Radio Conference (GRCon) is explained. See [GRCon22](https://events.gnuradio.org/event/18/overview).

## Installation

Note: These instructions are written for a Linux OS. Similar commands work for Mac and Windows.

1. Open a terminal window.
2. Change to the home directory.  
```
cd ~/  
```
3. If you don't have 'git', enter  
```
sudo apt install git  
```
4. Clone the repository:  
```
git clone https://github.com/duggabe/js-html.git
```

## Local Testing

* Open your file manager and go to the `~/js-html folder.

* Open `Test3.html` in your browser to see the footer format.

* Open `Test4.html` in your browser to see the Sponsor page format.

## References

* [HTML JavaScript](https://www.w3schools.com/html/html_scripts.asp)
* [JavaScript Tutorial](https://www.w3schools.com/js/default.asp)
* [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)

## How it works

The JavaScript for the GRCon Indico website is in file `sponsors.js`. It performs two main functions: (a) generate the footer for every GRCon webpage, and (b) generate the Sponsors page. The interface to the Indico software is done using a JavaScript inserted in the basic page template. That script links to the external script located in `https://www.gnuradio.org/indico/sponsors.js`.

To make sure that the DOM is completely loaded before the script executes, two lines were added to wait on the 'load' event:

    document.body.onload = function() {myFunction()};  
    function myFunction() {  

where 'myFunction()' wraps the rest of the script.

Since the same script must support multiple events, determination of individual Sponsor pages is performed in the code. Those Sponsor pages are:

    GRCon21 - https://events.gnuradio.org/event/8/page/5-sponsors  
    GRCon22 - https://events.gnuradio.org/event/18/page/60-our-sponsors  
    GRCon23 - https://events.gnuradio.org/event/21/page/94-our-sponsors  

### Generate footer

For pages other than the Sponsors page, the existing footer is totally replaced. In the Indico-generated page there is a DIV with a class of "footer " which marks the beginning of the page footer. Since `sa = document.getElementsByClassName("footer ");` returns an array, sa[0] is the one (only) we need. We start by writing the footer title "Our Sponsors". Next we build a `<table>` using the `tbl = document.createElement("TABLE");` method. In order to apply a class to the table, we use `tbl.setAttribute("class", "u_table");`. The classes are defined in `GRCon22.css`. The `DCS.css` file is only for local testing.

The header row is derived from data in the `myObj` object. If there is more than one entry which has the same level of sponsorship, the table header for that level is set to span multiple columns. As each entity is built, it is attached to the parent entity.

The data row also is derived from `myObj`. For each entry, a `<td>` item is created with a clickable icon linking to the sponsors web site.

### Generate Sponsors page

For the Sponsors page, the existing paragraphs are preserved, since they can be edited by the event administator. Below that, `sponsors.js` creates a vertical listing of sponsor levels, with each entry displaying a clickable icon linking to the sponsors web site on the left portion of the screen, and a short synopsis of what the company does on the right side.

### Footer last two lines

The original last line of the Indico page has the Indico icon, version number, a "Help" link, and a "Contact" link. The `sponsors.js` script makes two lines out of this. The first is a revised help / contact portion which is centered on the page. The second line has the Indico icon and version number on the left.

