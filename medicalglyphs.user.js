// ==UserScript==
// @name          medical glyphs
// @namespace     http://ggnore.us
// @version       0.1.0
// @description   :glyph:medical glyphs:glyph:
// @include       *
// ==/UserScript==

// array generated on 20130307 by Random
var smiley = {
    // Basic Smilies
    ":glyph:": "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",
    ":glyph2:": "iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAACAtJREFUaIHtmtlTVNkdxz/n3t5ZZGlBcJBVJDpqQBEVETWm1FKMGnX0YaykJjUzyVRSldf8A3nNS95SiTUaNSmX6My4jMZ9QURcBkRApVkVoZu1ge6+9548tI6KqA10q2Xl+9LVt+753d+nz+/87u/8TsMHIgEgpSwB/vKOfRmv/i6E+KvpyZc4oOBdejMBnQBQ3rUX4dIHA2J68y1vSVIiR7kshAhp+HsCItH9fvyBAJp8hqMoJmwOO2oILO8JiJ/eNhfNbR14/AEMKZFSJSo2kbz8OSRY3mxhnCASOVocjNCzsHj9/UJ4abpVzokzFdzp6mbA62U4YCI1ewFf5kYKREokEmkY6LqOIUfEsZSgqKiqgirEE4gn92s6hhAEr4IQCqqqogCayURAG6azsZ6augba+xQyZtsoG4L58REAkYDU/Az1d9PV1YNXB+V5EENHWhKYkpxAfIwFKcHQfHh7u+h83INPMaMAEoHZHk+icxLR1ijyihYT8Pfj6W6irSsK3WrBag5toY8PRPMx0HGP2opznLpci1uNIcrynJnhbtz2hWzdsIJlBSlIfYju9moqzxzjzJVmtKRUHICUCpa4XBaUziMvwaDz9kn27D5MeYuZghWfkEwHVxutEQKROgPuVmpv3uR2k8a0olWsnJ3HFPtzQdxZyd5KGxIwtCE8LbeoOH2UC7e6SCrdysriPOIAQwvw+F41rY3XOHq8gopLlbQrGazZsZl1+Qk8uvE993uGsaoRADG0fprqb3LllououetYvSSLaIcds/JcCFgacFTrCGCw8z5V585zrVYnp3gLJcsXkJ5gQwWQBs44Qf/JXRw8f4ZWSw4/27SNTStLyJykMTnaxKcZGjOiww4i0fvbaW1s5ZE3jtUf5+CMi+alKFYF4km94OvtpE+TxM9cRGnJfKY5o7EowcWv+4d47Kqm/FwFDzoFycWF5M+dQ/bUOGzCYOqMn5KQKbHbwg6i4+1oxd0fwJKZz4wUx8sQI2TofhS7g/jkNFKcMT9CaL4+Wmousu9vO7ngspBfVobTOhXLYADDpCBQsDpisDpC924MtZafzrYufJqFnPxcnNbQhgpVQTWrqApIwyAw2E1zzUUO7vqas/V+0ovWsHHzSqbHO9AHBgmE7tB4QTS8/Qp2WyJ5052Yx/ggKQ18g25c1Rc5sncvR6u6yVy6kS0bVzE/dyqxNtMbZ/h1GtNiFyKKKIcgbtLYMKRh4PN287ihguMH93PkSjupJVvYvnk183KmEG1tnhAEvI1aS9fw9XfRWNPC+W8PcvzaQxILN/L5rzdSmJWE3axOGAIiDSIh4O2hpekKj90NnCp3kbB4G3/86hPmTYvHrIiwQECkQCRIQ0fTAnha6rl6/h6DWhQpJdv4/FebmJ+RgAnCBgGR2iFKHZ/XzcO2duruunjgEUxevJXffraZ4rxkzIQXAiI0I1pfF3fOVXKq5izfV+tkL9/KH774JUXZY892oSrMIBItEMB98Rgnz1/HbXiwf7ychaVLmfORE7MI35oYqTCBBHdNAV8vLfX3aPU0441zkp6aRuqsNJzxNiwmJWIQEBaQ4O5P9/fRVHWaA//6hjqcFG3+OUvT/QzqkmhL+NfESE1wsT+pnfz9uG6d5dC+f3PqWgMDCXkUlZRSPDeHpFhrSM2DiWoCMyKR0iAw3E9zzQUO7NrN6foA2UWFJCTOIM2ZyCRbG8pb6pyNv/lg6PgGu2mtq2T/zp2crh0ifckGtpSoXHmQhO3HvoPE0A0MwyCS/cBxWZaGzvCAG9cPlzm2fx/fXXcztXgj27asoXDGR8TazAhACDW4v+9x43H34wsYYXb/mcYMEoTowlVTzon/HOLIxWYyVn7Kjm1rWZCbQrT1WRWrOiYRZbfge9RA1dUq7rZ58GuRgRlTaEmp4/N6cFVX0PTtYY5dayOm4Bd89dkG5qbFY1NfTLG2hGlkTR9gaOAOdTcvUzcUIGrZIrJTYoDwZrIQQYJ9KUPvoaX+KnUNPlpvtxFbsJ7ff7mVwoxElFEcs8UkkTkzjuTkDJJvXOJ4VQVXErNIT4kJe0kRgr1gig0MeenrraP80nEuDWayfP02fvebzSzMcfKqRocQCiazjdgp05i10ARqFa2ePvyhPXhMCsme7uulpaaSyhv1eKzZLF+1nS92bGBBjvN9aR6/abEHGwWNN89y8J+7OXSqFUfmcrbvKKMwOzFiBeB49JofVBLw9eO6eZaDe/bx31o3AXsOeWlZZGVNxh7h2mmsGgXkSQE43Ifr1hn2/eNrLjcJZixbT4ZmYfKUGMxh2p6GUy+DSEAO0VZzgQO79nC5CbKK17B+3QKstffp9r+fp3Wjz0igh7ryi1xvlkxfspaytSuYlxtL04P7POzpw93RQcerLHZ14/XZMEaeh0iJofkY6HXzuKMDO8+n6y56vcNMemnQhECCl+Om5lFaNp+5iwqZnZNKrG2YdosPd3sN9w8P8MOrLHof0K7nI03Pz5xAQWL4emmuvst3onHEdtdDQ6uNgpyZ467GRgERYI5jZuk6sgwrMbEOrGYVgYEzO4sc7zAtg7zy3YEpi4IpGaQlRb1g02yLITV9Oj+ZpeC1jGzGTSZ3TgpZGZMJ4XBqVD3950MZcOT1twZfjIYR/HytUUVBCPHCAZCUMhhehvHK09un48aYSP4shPjTGN5nAiEEaojnFS+NFgKEQI3QBuX9TEHj0P9B3jd9MCBPs5YNcL5jX8arPiFE3/8API1Fl6w6e9MAAAAASUVORK5CYII="
};

// These arrays were created because regular expression searches as keys is tricky
// These arrays will only include special-case smilies that require special regular expression syntax (like :( or :), which include regular expression characters


var smileyCode = [];
var smileyImg = [];

specialCode = [
    //Basic Smilies
    /:\(/,
    /:\)/,
    /;\)/,
    /;-\*/,
    // TV, Movies, Games, & Comics
    /:\?:/
];
specialImg = [
    //Basic Smilies
    "R0lGODlhDwAPANU/AP/4oNLLfs7IfNXPgN/Yhv/3m//7zv/4p//5sd3WhP/83P/6vf/3nf/4q/rylv/70v/5sP/81f31mO7nj//4ov/7x8rDef/7yvHqkcO9dcfBd+bfiv/6wP/3mf/4pf/7ydzVhP72mP/70f/83f/7y//6vP/4qvbulP/82cK8dfjwlerjjP/82P/5r//5tcvFevnxlf/7xv/6v//4o//5tOjhi+Hah9TNf//6wtnSgvz0l//6u+PciMG7dAAAAKSkpCH5BAEAAD8ALAAAAAAPAA8AAAaTwJ9Q6CsWh8hfUcF6XDhHpE8x8kUMMR/k4Bv6WCiroSKj+RiOrvLhE5FwO1cD4MN0fZXLpwgxces1NkULCyVFAAwFRRsJA0UICC0NFAUdEicrCQEvRR4zFAAFEjowEwQBGilFIQ4qJ0ZFAhk9PXcTKz48BCADFj60aj4bBDk3AhaztLVeAwIayspqXr/QUUlKsElBADs=",
    "R0lGODlhDwAPANU/AP/4q//4ovDokP/4oNLLft/Yhv/3m/HqkdXPgP/81c7IfOrjjP/70v/82f/5sf/5sP/4p+7nj93WhP/7zv31mP/5tf/3nfrylv/7yv/83P/7x//6vcfBd+bfiv/6u+jhi/bulPvzlv/4pfTtk/buk//6wsK8dcrDecvFev72mPvzl//82P/5tP/7xv/6vP/6wP/5r+nijP/7yf/80//3meHah//6v9nSgvz0l/nxlePciP/82//4qMG7dAAAAKSkpCH5BAEAAD8ALAAAAAAPAA8AAAaRwJ9Q6CsWh8hfMbNiYF5HpC+T2SUmLc8D4hv6Vo3GVWNj8SyXrpIxK5Y8lWLo0PVpMLLiA8D1HT41RRsbLhUAARYGKgcdEghFDg4whwY0FCQxEgQoRSIBAQMGFDg5EQUEHCZFKWkgIwcCCwUKPj09dRELPjoFjie1t0QdBTdGRbbBRAgKHMjIal7Az9BJxtQ/QQA7",
    "R0lGODlhDwAPANU/AP/4q//4ovDokP/4oNLLfv/3m/Hqkd/YhtXPgN3WhP/3ne7nj/31mMfBd//70v/82f/83P/5sP/4p//81c7IfP/5tf/6u//7yvrylv/5serjjP/7x//6vebfiv/7zv/6vN7Xhfvzlv/81//7yf/4pfTtk//7xsrDeenijP72mP/82P/70fbuk//5tP/7y//3mf/5r8vFev/83cK8df/6wPvzl+Hah9nSgvz0l//6v/nxlePciPbulMG7dAAAAKSkpCH5BAEAAD8ALAAAAAAPAA8AAAaSwJ9Q6CsWh8hfEaJyXGhHpA8ig0w8JktE4hv6RI/HdZNrSRSYrtLhW7l8lkoxZOj6NpdRMQLg+gwoNkUcHB8VAAEKBTUGHQkIRRkZMIgFLwwsKAkEMUUkAQEDBQw4OgsHBA0zRSlpPCUGAhogFD49PXYLGj47B48ntrhEHQc3RkW3wkQIFA3JyWpewdDRScfVP0EAOw==",
    "R0lGODlhDwAPALMIAICAANXID/suEO51Av7QAP0AAAAAAP/+AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAgALAAAAAAPAA8AAAREEElpap0Y1cP5xUYnelMIjCepAZtnpIbmdu083keN0+FBFIeCwGcg2ArIpM+YkxUsBmVTFkwCaaVAcDCKgXq8TAmaiQAAOw==",
    // TV, Movies, Games, & Comics
    "R0lGODlhEAAQAIIAAAAAACBoAIhYGNigOPjYIOjw+AAAAAAAACH/C05FVFNDQVBFMi4wAwHoAwAh+QQJDwABACwAAAAAEAAQABIDRxgB3M5qlTmqrQLIAoj/HpMBEweG01iaH5kyQ9m1pSqDzhhzcxjqDEJP+IOdjgQgsqVcCkeCgdMDvVgxmYVgy+1uNYqHGJwAACH5BAkPAAEALAAAAAAQABAAEgNLGAHczmqVOaqtAsjSiP8YM43AB2bASJrEgA7iVBKzK8acV7/qTHs2wEDm+7VeDJYpOMwpj4xmcfnKPFtBwWWLySwE4LAYrFE8zuUEACH5BAkPAAEALAAAAAAQABAAEgNPGAHczmqVOaqtAshCHiMYwwFTOQFgRpKmCQzqwBZN+arjY8PMQPyzU6r369hQw1ex8ynylECbM1acIZOVahP0FFy+mMxCQC6byRqFx6NIAAAh+QQJDwABACwAAAAAEAAQABIDRBgB3M5qlTmqrQLIQrp/GcB5nThN4fidZzh8hFk0KRyDzFuSsmuXrRxpSBMOgSjjsZfTLRkhwWWKySwE2KwWq1E8vt0EACH+K0ZJTEUgSURFTlRJVFkNCkNyZWF0ZWQgb3IgbW9kaWZpZWQgYnkNCkhXDQoAIf7qVU5SRUdJU1RFUkVEIFNIQVJFV0FSRQ0KDQpBc3NlbWJsZWQgd2l0aCBHSUYgQ29uc3RydWN0aW9uIFNldDoNCg0KQWxjaGVteSBNaW5kd29ya3MgSW5jLg0KQm94IDUwMA0KQmVldG9uLCBPTg0KTDBHIDFBMA0KQ0FOQURBLg0KDQpodHRwOi8vd3d3Lm1pbmR3b3Jrc2hvcC5jb20NCg0KVGhpcyBjb21tZW50IHdpbGwgbm90IGFwcGVhciBpbiBmaWxlcyBjcmVhdGVkIHdpdGggYSByZWdpc3RlcmVkIHZlcnNpb24uACH/C0dJRkNPTm5iMS4wAgQADjwAAgADAAAAAAAAAAAAPEM6XFdJTkRPV1NcRGVza3RvcFw9PT09PT09XG15d2VicGFnZVxvdGhlciBzdHVmZlxxYm94XDEuYm1wAA48AAIABQAAAAAAAAAAADxDOlxXSU5ET1dTXERlc2t0b3BcPT09PT09PVxteXdlYnBhZ2Vcb3RoZXIgc3R1ZmZccWJveFwyLmJtcAAOPAACAAcAAAAAAAAAAAA8QzpcV0lORE9XU1xEZXNrdG9wXD09PT09PT1cbXl3ZWJwYWdlXG90aGVyIHN0dWZmXHFib3hcMy5ibXAADjwAAgAJAAAAAAAAAAAAPEM6XFdJTkRPV1NcRGVza3RvcFw9PT09PT09XG15d2VicGFnZVxvdGhlciBzdHVmZlxxYm94XDQuYm1wAAA7"
];


// Thanks to James Padolsey @ http://james.padolsey.com/javascript/find-and-replace-text-with-javascript/
function findAndReplace(searchText, replacement, searchNode) {
    if (!searchText || typeof replacement === 'undefined') {
        // Throw error
        return;
    }
    var regex = typeof searchText === 'string' ?
        new RegExp(searchText, 'g') : searchText,
        childNodes = (searchNode || document.body).childNodes,
        cnLength = childNodes.length,
        // excludes = 'html,head,style,title,link,meta,script,object,iframe,textarea';
        excludes = 'head';
    while (cnLength--) {
        var currentNode = childNodes[cnLength];
        if (currentNode.nodeType === 1 &&
            (excludes + ',').indexOf(currentNode.nodeName.toLowerCase() + ',') === -1) {
            arguments.callee(searchText, replacement, currentNode);
        }
        if (currentNode.nodeType !== 3 || !regex.test(currentNode.data) ) {
            continue;
        }
        var parent = currentNode.parentNode,
            frag = (function(){
                var html = currentNode.data.replace(regex, replacement),
                    wrap = document.createElement('div'),
                    frag = document.createDocumentFragment();
                wrap.innerHTML = html;
                while (wrap.firstChild) {
                    frag.appendChild(wrap.firstChild);
                }
                return frag;
            })();
        parent.insertBefore(frag, currentNode);
        parent.removeChild(currentNode);
    }
}

// tweaked on 20130307 by Random to include title attrs
function replaceGlyphs(location) {
	if(window.location != "http://forums.somethingawful.com/misc.php?action=showsmilies") {
		for(var x in smiley) {
			findAndReplace(x, "<img src='data:image;base64," + smiley[x] + "' title='" + x + "' />", location);
		}
		// for(var x in specialCode) {
		// 	findAndReplace(specialCode[x], "<img src='data:image;base64," + specialImg[x] + "' title='" + x + "' />", location);
		// }
	}
}

// This event listener fires the script on content that's dynamically loaded in (i.e. expanding pages)
document.body.addEventListener('DOMNodeInserted', function(event) { replaceGlyphs(event.target); }, false);

// Call the script to process information that's currently on the page
replaceGlyphs();
