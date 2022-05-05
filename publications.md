---
layout: layout.njk
title: Our Team
---
## Publications
{%for member in pubs.records%}
<div class="card">
    <div class="card-header">
    <div class="card-title h5">{{member.title}}</div>
    </div>
    <div class="card-body">
    <p class="gray">
    {%for author in member.author%}{{author.name}}; {%endfor%}
    </p>
        <p class="gray">{{member.journal.name}} {{member.year}}</p>
    </div>
    <div class="card-footer">
    <a href="{{member.link}}" class="btn btn-primary">Paper</a>
    <a href="{{member.github}}" class="btn btn-link">GitHub</a>
    </div>
</div>
{%endfor%}

