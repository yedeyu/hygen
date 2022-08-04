---
# npx hygen mygen cmd3 --name Peter --message 'This is a short message.'
# npx hygen mygen cmd3 --name peter --message 'This is a short message.'
to: app/workers/<%=name%>.1.js
---
<%
 Message = message.toUpperCase()
%>

class <%= Name %> {
    work(){
        return "<%= Message %>"
    }
}