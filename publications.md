---
layout: layout.njk
title: Our Team
---
## Publications
{%for member in publications.pubs%}
<div class="card">
    <div class="card-header">
    <div class="card-title h5">{{member.name}}</div>
    </div>
    <div class="card-body">
        <p class="gray">{{member.portal}}</p>
    </div>
    <div class="card-footer">
    <a href="{{member.link}}" class="btn btn-primary">Paper</a>
    <a href="{{member.github}}" class="btn btn-link">GitHub</a>
    </div>
</div>
{%endfor%}

