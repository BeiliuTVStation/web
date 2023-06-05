"use strict";(self.webpackChunkseven_innovation_base_website=self.webpackChunkseven_innovation_base_website||[]).push([[8610],{78665:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(63366),l=a(67294),n=a(86010),i=a(24632),s=a(39960),o="sidebar_a9qW",m="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",g="sidebarItem_CF0Q",d="sidebarItemLink_miNk",u="sidebarItemLinkActive_RRTD",p=a(95999);function h(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(o,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:g},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:u},e.title))}))))}var b=["sidebar","toc","children"];function v(e){var t=e.sidebar,a=e.toc,s=e.children,o=(0,r.Z)(e,b),m=t&&t.items.length>0;return l.createElement(i.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(h,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},36299:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(67294),l=a(95999),n=a(71750);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(n.Z,{permalink:a,title:r.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&r.createElement(n.Z,{permalink:i,title:r.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},38561:function(e,t,a){a.d(t,{Z:function(){return P}});var r=a(67294),l=a(86010),n=a(95999),i=a(39960),s=a(44996),o=a(51486),m=a(18780),c=a(47459),g=a(86753),d="blogPostTitle_rzP5",u="blogPostData_Zg1s",p="blogPostDetailsFull_h6_j",h=a(20062),b="image_o0gy";function v(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function E(e){var t=e.author,a=t.name,l=t.title,n=t.url,i=t.imageURL,s=t.email,o=n||s&&"mailto:"+s||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement("span",{className:"avatar__photo-link avatar__photo"},r.createElement(v,{href:o},r.createElement("img",{className:b,src:i,alt:a}))),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(v,{href:o,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var f="authorCol_FlmR",_="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function Z(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var n=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",n?_:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,l.Z)(!n&&"col col--6",n?N:f),key:t},r.createElement(E,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function P(e){var t,a,b=(a=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),v=(0,s.C)().withBaseUrl,E=e.children,f=e.frontMatter,_=e.assets,N=e.metadata,P=e.truncated,k=e.isBlogPostPage,T=void 0!==k&&k,w=N.date,I=N.formattedDate,y=N.permalink,A=N.tags,L=N.readingTime,M=N.title,R=N.editUrl,x=N.authors,U=null!=(t=_.image)?t:f.image,C=!T&&P,B=A.length>0,F=T?"h1":"h2";return r.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(F,{className:d,itemProp:"headline"},T?M:r.createElement(i.Z,{itemProp:"url",to:y},M)),r.createElement("div",{className:(0,l.Z)(u,"margin-vert--md")},r.createElement("time",{dateTime:w,itemProp:"datePublished"},I),void 0!==L&&r.createElement(r.Fragment,null," \xb7 ",b(L))),r.createElement(Z,{authors:x,assets:_})),U&&r.createElement("meta",{itemProp:"image",content:v(U,{absolute:!0})}),r.createElement("div",{id:T?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(c.Z,null,E)),(B||P)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",T&&p)},B&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":C})},r.createElement(h.Z,{tags:A})),T&&R&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(g.Z,{editUrl:R})),C&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":B})},r.createElement(i.Z,{to:N.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:M})},r.createElement("b",null,r.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},69404:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(67294),l=a(39960),n=a(78665),i=a(38561),s=a(95999),o=a(51486),m=a(36299),c=a(14739),g=a(86010);function d(e){var t,a=e.metadata,d=e.items,u=e.sidebar,p=e.listMetadata,h=a.allTagsPath,b=a.name,v=a.count,E=(t=(0,o.c2)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),f=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:E(v),tagName:b});return r.createElement(o.FG,{className:(0,g.Z)(o.kM.wrapper.blogPages,o.kM.page.blogTagPostListPage)},r.createElement(o.d,{title:f}),r.createElement(c.Z,{tag:"blog_tags_posts"}),r.createElement(n.Z,{sidebar:u},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,f),r.createElement(l.Z,{href:h},r.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),d.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})),r.createElement(m.Z,{metadata:p})))}}}]);