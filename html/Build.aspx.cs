using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Xml;

public partial class html_Build : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void btnBuild_Click(object sender, EventArgs e)
    {
        string homeDir = HttpContext.Current.Server.MapPath("~");
        string version = getVersion(homeDir);
        string entireFile = string.Format("{0}StartGame_{1}.html", homeDir, version);
        string realFile = string.Format("{0}startGame.html", homeDir);
        
        XmlDocument doc = new XmlDocument();
        doc.Load(realFile);
        string css, script, body, line;
        css = script = body = "";
        bool readFlag = false;
        foreach(XmlNode pn in doc.ChildNodes)
        {
            foreach(XmlNode tn in pn.ChildNodes)
            {
                if(tn.Name == "head")
                {
                    foreach(XmlNode l in tn.ChildNodes)
                    {
                        if (l.Name == "link")
                            css += getCSS(homeDir, l.Attributes["href"].Value);
                        if(l.Name == "script")
                            script += getJS(homeDir, l.Attributes["src"].Value);
                    }
                }
            }
        }
        StreamReader reader = File.OpenText(realFile);
        while ((line = reader.ReadLine()) != null)
        {
            if (line.Trim() == "</body>")
                readFlag = false;
            if (readFlag)
                body += line;
            if (line.Trim() == "<body>")
                readFlag = true;
        }

        if (File.Exists(entireFile)) { }
            File.Delete(entireFile);
        using(StreamWriter file = new StreamWriter(entireFile))
        {
            file.Write("<!DOCTYPE html><html><head><title>Mad Pooper</title><style>");
            file.Write(css);
            file.Write("</style><script>");
            file.Write(script);
            file.Write("</script></head><body>");
            file.Write(body);
            file.Write("</body></html>");
        }
    }

    public string getCSS(string home, string data)
    {
        string getFile = string.Format("{0}{1}", home, data.Replace("./", "").Replace("/", "\\"));
        string returnString = "";
        if (!File.Exists(getFile))
        {
            error(getFile + " no!");
        }
        else
        {
            StreamReader reader = File.OpenText(getFile);
            string line;
            while ((line = reader.ReadLine()) != null)
            {
                returnString += string.Format("{0}{1}", line, Environment.NewLine);
            }
        }
        return returnString;
    }

    public string getJS(string home, string data)
    {
        string getFile = string.Format("{0}{1}", home, data.Replace("./", "").Replace("/", "\\"));
        string returnString = "";
        if (!File.Exists(getFile))
        {
            error(getFile + " no!");
        }
        else
        {
            StreamReader reader = File.OpenText(getFile);
            string line;
            while ((line = reader.ReadLine()) != null)
            {
                returnString += string.Format("{0}{1}", line, Environment.NewLine);
            }
        }
        return returnString;
    }

    public string getVersion(string homeDir)
    {
        string global = string.Format("{0}scripts//global.js", homeDir);
        string[] fileContents = File.ReadAllLines(global);
        foreach(string fc in fileContents)
        {
            if(fc.Contains("g.version ="))
            {
                string temp = fc.Replace("  =", "").Replace("\"", "").Replace(";", "").Trim();
                return temp;
            }
        }
        return "X.X.X";
    } 

    private void error(string errorString)
    {
        lbl.Text += string.Format("{0}{1}", errorString, Environment.NewLine);
    }
}