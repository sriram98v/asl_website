---
layout: layout.njk
title: Our Team
---


## Staff
<div>
{%for member in staff.members%}
<div class="player">
<div class="player-image float-left">
<img src="/assets/images/team/{{member.photo}}" class="img-player">
</div>
<div class="player-content">
    <div class="player-header">
    <div class="player-title h5">{{member.name}}</div>
    </div>
    <div class="player-body">
        {{member.about}}
    </div>
        <div class="player-tags">
            <p> Interests:{%for interest in member.interests%}<span class="chip">{{interest}}</span>{%endfor%}</p>
        </div>
    <div class="player-footer">
    <a href="{{member.website}}" class="btn btn-primary">Webpage</a>
    <a href="sendto:{{member.email}}" class="btn btn-link">Email</a>
    <a href="{{member.github}}" class="btn btn-link">GitHub</a>
    </div>
</div>
</div>
{%endfor%}
</div>

## Students
### Ph.D.
<div>
{%for member in students_phd.members%}
<div class="player">
    <div class="player-image">
        <img src="/assets/images/team/{{member.photo}}" class="img-player">
    </div>
    <div class="player-content">
        <div class="player-header">
            <div class="player-title h5">{{member.name}}</div>
        </div>
        <div class="player-body">
            {{member.about}}
        </div>
        <div class="player-tags">
            <p> Interests:{%for interest in member.interests%}<span class="chip">{{interest}}</span>{%endfor%}</p>
        </div>
        <div class="player-footer">
            <a href="{{member.website}}" class="btn btn-primary">Webpage</a>
            <a href="sendto:{{member.email}}" class="btn btn-link">Email</a>
            <a href="{{member.github}}" class="btn btn-link">GitHub</a>
        </div>
    </div>
</div>
{%endfor%}
</div>

### Masters
<div>
{%for member in students_ms.members%}
<div class="player">
<div class="player-image float-left">
<img src="/assets/images/team/{{member.photo}}" class="img-player">
</div>
<div class="player-content">
    <div class="player-header">
    <div class="player-title h5">{{member.name}}</div>
    </div>
    <div class="player-body">
        {{member.about}}
    </div>
    <div class="player-tags">
            <p> Interests:{%for interest in member.interests%}<span class="chip">{{interest}}</span>{%endfor%}</p>
        </div>
    <div class="player-footer">
    <a href="{{member.website}}" class="btn btn-primary">Webpage</a>
    <a href="sendto:{{member.email}}" class="btn btn-link">Email</a>
    <a href="{{member.github}}" class="btn btn-link">GitHub</a>
    </div>
</div>
</div>
{%endfor%}
</div>

## Alumni
<div>
{%for member in alumni.members%}
<div class="player">
<div class="player-image float-left">
<img src="/assets/images/team/{{member.photo}}" class="img-player">
</div>
<div class="player-content">
    <div class="player-header">
    <div class="player-title h5">{{member.name}}</div>
    </div>
    <div class="player-body">
        {{member.about}}
    </div>
    <div class="player-tags">
            <p> Interests:{%for interest in member.interests%}<span class="chip">{{interest}}</span>{%endfor%}</p>
    </div>
    <div class="player-footer">
    <a href="{{member.website}}" class="btn btn-primary">Webpage</a>
    <a href="sendto:{{member.email}}" class="btn btn-link">Email</a>
    <a href="{{member.github}}" class="btn btn-link">GitHub</a>
    </div>
</div>
</div>
{%endfor%}
</div>


