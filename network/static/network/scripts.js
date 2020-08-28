document.addEventListener('DOMContentLoaded', function() {
    const followbutton = document.querySelector("#follow");
    const unfollowbutton = document.querySelector("#unfollow");
    if(followbutton) {
        followbutton.addEventListener('click', follow);
    }
    if(unfollowbutton) {
        unfollowbutton.addEventListener('click', unfollow);
    }
});

function follow() {
    const follower = document.querySelector("#follow").dataset.followerid;
    const followee = document.querySelector("#follow").dataset.followeeid;
    console.log(follower + " is following " + followee);
    url = "/follow/" + follower + "/" + followee
    fetch(url)
    .then(response => response.json())
    .then(result => {
        if(result['message'] === "success") {
            document.querySelector("#follow").innerHTML = "Unfollow";
            document.querySelector("#follow").id = "unfollow";
            document.querySelector("#unfollow").addEventListener('click', unfollow);
            let followercount = parseInt(document.querySelector('#followercount').innerHTML);
            followercount++;
            document.querySelector('#followercount').innerHTML = followercount;
            if(followercount === 1) {
                document.querySelector('#followerlabel').innerHTML = "Follower";
            }
            else {
                document.querySelector('#followerlabel').innerHTML = "Followers";
            }
        }
        else {
            p = document.createElement('p');
            p.innerHTML = result['message'];
            document.querySelector("#followbuttons").appendChild(p);
        }
    });
    return false;
}

function unfollow() {
    const follower = document.querySelector("#unfollow").dataset.followerid;
    const followee = document.querySelector("#unfollow").dataset.followeeid;
    console.log(follower + " is no longer following " + followee);
    url = "/unfollow/" + follower + "/" + followee
    fetch(url)
    .then(response => response.json())
    .then(result => {
        if(result['message'] === "success") {
            document.querySelector("#unfollow").innerHTML = "Follow";
            document.querySelector("#unfollow").id = "follow";
            document.querySelector("#follow").addEventListener('click', follow);
            let followercount = parseInt(document.querySelector('#followercount').innerHTML);
            followercount--;
            document.querySelector('#followercount').innerHTML = followercount;
            if(followercount === 1) {
                document.querySelector('#followerlabel').innerHTML = "Follower";
            }
            else {
                document.querySelector('#followerlabel').innerHTML = "Followers";
            }
        }
        else {
            p = document.createElement('p');
            p.innerHTML = result['message'];
            document.querySelector("#followbuttons").appendChild(p);
        }
    });
    return false;
}