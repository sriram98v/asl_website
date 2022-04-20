---
layout: layout.njk
title: Our Team
---
## Staff
{%for member in staff.members%}
<div class="player">
<div class="player-image float-left">
<img src="/assets/images/team/{{member.photo}}" class="img-responsive">
</div>
<div class="player-content">
    <div class="player-header">
    <div class="player-title h5">{{member.name}}</div>
    </div>
    <div class="player-body">
        {{member.about}}
    </div>
    <div class="player-footer">
    <a href="{{member.webpage}}" class="btn btn-primary">Webpage</a>
    <a href="sendto:{{member.email}}" class="btn btn-link">Email</a>
    <a href="{{member.github}}" class="btn btn-link">GitHub</a>
    </div>
</div>
</div>
{%endfor%}

## Students
### Ph.D.
{%for member in students_phd.members%}
<div class="player">
<div class="player-image">
<img src="/assets/images/team/{{member.photo}}" class="img-responsive">
</div>
<div class="player-content">
    <div class="player-header">
    <div class="player-title h5">{{member.name}}</div>
    </div>
    <div class="player-body">
        {{member.about}}
    </div>
    <div class="player-footer">
    <a href="{{member.webpage}}" class="btn btn-primary">Webpage</a>
    <a href="sendto:{{member.email}}" class="btn btn-link">Email</a>
    <a href="{{member.github}}" class="btn btn-link">GitHub</a>
    </div>
</div>
</div>
{%endfor%}

### Masters
{%for member in students_ms.members%}
<div class="player">
<div class="player-image float-left">
<img src="/assets/images/team/{{member.photo}}" class="img-responsive">
</div>
<div class="player-content">
    <div class="player-header">
    <div class="player-title h5">{{member.name}}</div>
    </div>
    <div class="player-body">
        {{member.about}}
    </div>
    <div class="player-footer">
    <a href="{{member.webpage}}" class="btn btn-primary">Webpage</a>
    <a href="sendto:{{member.email}}" class="btn btn-link">Email</a>
    <a href="{{member.github}}" class="btn btn-link">GitHub</a>
    </div>
</div>
</div>
{%endfor%}

## Alumni
{%for member in alumni.members%}
<div class="player">
<div class="player-image float-left">
<img src="/assets/images/team/{{member.photo}}" class="img-responsive">
</div>
<div class="player-content">
    <div class="player-header">
    <div class="player-title h5">{{member.name}}</div>
    </div>
    <div class="player-body">
        {{member.about}}
    </div>
    <div class="player-footer">
    <a href="{{member.webpage}}" class="btn btn-primary">Webpage</a>
    <a href="sendto:{{member.email}}" class="btn btn-link">Email</a>
    <a href="{{member.github}}" class="btn btn-link">GitHub</a>
    </div>
</div>
</div>
{%endfor%}


