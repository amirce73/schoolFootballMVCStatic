$files = Get-ChildItem -Path "e:\amirce73\FootballSchoolMVC\Views\Pages" -Filter "*.cshtml"
foreach ($f in $files) {
    $c = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    
    $hasOldShield = $c -match 'href=\"#\"[^>]*>\s*<i class=\"fa fa-shield\"' -or $c -match '<i class=\"fa fa-shield\"></i>[^<]*</a>' -and ($c -notmatch 'href=\"/verification\"[^>]*>\s*<i class=\"fa fa-shield\"')
    $hasUnverifiedClick = $c -match 'badge-verify unverified[^>]*onclick'
    $hasBellClick = $c -match 'btn-noti[^>]*onclick' -or $c -match '<a[^>]+btn-noti[^>]+href=\"/bulletin\"'
    
    Write-Host "$($f.Name): ShieldVerified=$(-not $hasOldShield), UnverifiedClick=$hasUnverifiedClick, BellClick=$hasBellClick"
}
