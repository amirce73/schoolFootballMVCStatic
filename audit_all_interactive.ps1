Add-Type -AssemblyName System.Web

$viewsDir = "e:\amirce73\FootballSchoolMVC\Views\Pages"
$files = Get-ChildItem -Path $viewsDir -Filter "*.cshtml"

foreach ($f in $files) {
    $content = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    Write-Host "================== $($f.Name) =================="
    
    # 1. Back button
    $backMatches = [regex]::Matches($content, '<button[^>]+(btn-back|btn-top-action)[^>]*>')
    foreach ($m in $backMatches) {
        Write-Host "  BACK/TOP-ACTION: $($m.Value)"
    }

    # 2. Onclick handlers
    $onClicks = [regex]::Matches($content, 'onclick=\"([^\"]+)\"')
    foreach ($m in $onClicks) {
        $val = $m.Groups[1].Value
        if ($val -notmatch 'toggle|modal|close|stopPropagation') {
            Write-Host "  ONCLICK: $val"
        }
    }

    # 3. Form action
    $forms = [regex]::Matches($content, '<form[^>]+action=\"([^\"]+)\"')
    foreach ($m in $forms) {
        Write-Host "  FORM ACTION: $($m.Groups[1].Value)"
    }
}
