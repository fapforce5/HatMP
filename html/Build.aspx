<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Build.aspx.cs" Inherits="html_Build" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div style="width:50%; margin-top:200px; margin-left:auto; margin-right:auto;">
        <asp:Button ID="btnBuild" runat="server" Text="build" OnClick="btnBuild_Click" style="width:100%; padding:10px; font-size:1.5em;" /><br />
        <asp:Label ID="lbl" runat="server" style="font-size:1.1em;"></asp:Label>
    </div>
    </form>
</body>
</html>
