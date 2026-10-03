$bytes = [System.IO.File]::ReadAllBytes("e:\amirce73\FootballSchoolMVC\wwwroot\assets\main.js")
$str = [System.Text.Encoding]::GetEncoding("iso-8859-1").GetString($bytes)
if ($str -match "اطلاعات") {
    Write-Host "ISO-8859-1 decodes to Persian! File is actually UTF-8 but PowerShell viewed it as something else"
}
$strUtf8 = [System.Text.Encoding]::UTF8.GetString($bytes)
if ($strUtf8 -match "اطلاعات") {
    Write-Host "UTF8 decodes to Persian!"
} else {
    Write-Host "UTF8 does NOT decode to Persian!"
    # Print lines 80-120 in UTF-8
    $lines = $strUtf8.Split("`n")
    for ($i = 75; $i -lt 110; $i++) {
        Write-Host "[$i] $($lines[$i])"
    }
}
