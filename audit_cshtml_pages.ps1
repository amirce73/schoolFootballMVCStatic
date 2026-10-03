$files = Get-ChildItem -Path "e:\amirce73\FootballSchoolMVC\Views\Pages" -Filter "*.cshtml"
foreach ($f in $files) {
    $c = [System.IO.File]::ReadAllText($f.FullName)
    Write-Host "================== $($f.Name) =================="
    # check .html
    $htmlMatches = [regex]::Matches($c, '[\w\.\-/]+\.html')
    if ($htmlMatches.Count -gt 0) {
        Write-Host "  WARNING: Contains .html links:"
        foreach ($m in $htmlMatches) {
            Write-Host "    $($m.Value)"
        }
    }
    
    # check back button
    $backMatches = [regex]::Matches($c, '<button[^>]+(btn-back|btn-top-action)[^>]*>')
    if ($backMatches.Count -gt 0) {
        foreach ($b in $backMatches) {
            Write-Host "  BackBtn: $($b.Value)"
        }
    } else {
        Write-Host "  NO BackBtn found (could be index or dashboard)"
    }
}
