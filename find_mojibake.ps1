$lines = [System.IO.File]::ReadAllLines("e:\amirce73\FootballSchoolMVC\wwwroot\assets\main.js", [System.Text.Encoding]::UTF8)
for ($i = 0; $i -lt $lines.Length; $i++) {
    $line = $lines[$i]
    if ($line -match '[ØÙÛ]') {
        Write-Host "Line $($i + 1): $($line.Trim())"
    }
}
