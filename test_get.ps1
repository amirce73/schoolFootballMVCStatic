$res = (Invoke-WebRequest -Uri 'http://localhost:5035/store' -UseBasicParsing).Content
Write-Output "Length: $($res.Length)"
if ($res -match '<title>(.*?)</title>') { Write-Output "Title: $($matches[1])" }
if ($res -match 'id="view-([^"]+)"') { Write-Output "View: $($matches[1])" }
if ($res -match 'class="login-container"') { Write-Output "Login Container Found!" }
