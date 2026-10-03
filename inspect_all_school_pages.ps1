$files = Get-ChildItem -Path "E:\amirce73\SchoolPlayer\src\pages\school" -Filter "*.tsx"
foreach ($f in $files) {
    $c = [System.IO.File]::ReadAllText($f.FullName)
    Write-Host "================== $($f.Name) =================="
    # Match onClick handlers
    $onClicks = [regex]::Matches($c, 'onClick=\{([^}]+)\}')
    foreach ($oc in $onClicks) {
        Write-Host "  onClick: $($oc.Groups[1].Value)"
    }
    # Match Link/NavLink or href
    $hrefs = [regex]::Matches($c, 'href=[\"''"][^\"''"]+[\"''"]')
    foreach ($h in $hrefs) {
        Write-Host "  href: $($h.Value)"
    }
    # Match StickySubmitButton or submit
    if ($c -match '<StickySubmitButton|<button[^>]+type=[\"''"]submit[\"''"]') {
        Write-Host "  HAS SUBMIT BUTTON"
    }
}
