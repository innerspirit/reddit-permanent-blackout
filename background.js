chrome.webNavigation.onCompleted.addListener(function(details) {
  chrome.scripting.executeScript({
    target: { tabId: details.tabId },
    function: blackoutPage
  });
}, { url: [{ hostSuffix: 'reddit.com' }] });

function blackoutPage() {
	document.body.innerHTML = `
        <div class="interstitial">
            <img class="interstitial-image" src="//www.redditstatic.com/privacy_icon.png" alt="private" height="99" width="99">
            <div class="interstitial-message md-container">
                <div class="md">
                    <h3>Reddit blackout in effect</h3>
                    <div class="interstitial-subreddit-description">
                        <p>Reddit access has gone offline permanently in protest of reddit's proposed API changes, and unprofessional response to the community's concerns regarding 3rd party apps, mod tools, and accessibility options that will be impacted by this decision. No users will be approved to join.</p>
                    </div>
                    <p>The creators of Reddit Permanent Blackout have set this community to private.<br>Noone can view or take part in its discussions.</p>
                </div>
            </div>
            <div class="buttons">
                <a class="c-btn c-btn-primary" href="https://duckduckgo.com/?q=reddit+alternatives+-site%3Areddit.com&t=h_&ia=web">Browse Reddit Alternatives</a>
            </div>
        </div>`;
}