---
layout: layout.njk
title: Our Team
---
## Projects
{%for member in projects.projects%}
<div class="card">
<div class="card-image float-left">
        <img src="{{ '/assets/images/team/{{member.photo}}' | url }}" class="img-w-responsive">
</div>
<div class="card-content">
    <div class="card-header">
    <div class="card-title h5">{{member.name}}</div>
    </div>
    <div class="card-body">
        {{member.about}}
    </div>
    <div class="card-footer">
    <a href="{{member.github}}" class="btn btn-primary">GitHub</a>
    </div>
</div>
</div>
{%endfor%}

