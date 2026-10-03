$files = Get-ChildItem -Path 'e:\amirce73\FootballSchoolMVC\Controllers\*.cs'
foreach ($f in $files) {
    Write-Output "=== $($f.Name) ==="
    $lines = Get-Content $f.FullName
    for ($i = 0; $i -lt $lines.Count; $i++) {
        if ($lines[$i] -match '\[(HttpGet|HttpPost|Route)') {
            Write-Output "Line $($i+1): $($lines[$i].Trim())"
            Write-Output "   -> $($lines[$i+1].Trim())"
        }
    }
}
