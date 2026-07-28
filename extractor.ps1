$mappings = @(
    @("documents.html", "Views\Profile\Documents.cshtml", "Documents"),
    @("sports-info.html", "Views\Profile\SportsInfo.cshtml", "Sports Info"),
    @("financial-timeline.html", "Views\Financial\Timeline.cshtml", "Financial Timeline"),
    @("registration-history.html", "Views\Registration\History.cshtml", "Registration History"),
    @("attendance.html", "Views\Specialized\Attendance.cshtml", "Attendance"),
    @("bulletin.html", "Views\Specialized\Bulletin.cshtml", "Bulletin"),
    @("talent.html", "Views\Specialized\Talent.cshtml", "Talent"),
    @("certificate.html", "Views\Specialized\Certificate.cshtml", "Certificate"),
    @("club-info.html", "Views\Home\ClubInfo.cshtml", "Club Info"),
    @("gallery.html", "Views\Home\Gallery.cshtml", "Gallery"),
    @("store.html", "Views\Home\Store.cshtml", "Store"),
    @("insurance.html", "Views\Home\Insurance.cshtml", "Insurance"),
    @("insurance-status.html", "Views\Home\InsuranceStatus.cshtml", "Insurance Status"),
    @("training-backpack.html", "Views\Home\TrainingBackpack.cshtml", "Training Backpack")
)

$sourceDir = "c:\Users\amirce73\Desktop\schoolFootballStatic"
$targetDir = "c:\Users\amirce73\Desktop\FootballSchoolMVC"

foreach ($map in $mappings) {
    $sourceFile = Join-Path $sourceDir $map[0]
    $targetFile = Join-Path $targetDir $map[1]
    $title = $map[2]
    
    if (Test-Path $sourceFile) {
        $content = Get-Content -Path $sourceFile -Encoding UTF8 -Raw
        $regex = [regex]::new('<main class="main-wrapper">([\s\S]*?)</main>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
        $match = $regex.Match($content)
        
        if ($match.Success) {
            $mainContent = $match.Groups[1].Value
            $targetParent = Split-Path $targetFile
            if (-not (Test-Path $targetParent)) {
                New-Item -ItemType Directory -Force -Path $targetParent | Out-Null
            }
            
            $finalContent = "@{`n    ViewData[`"Title`"] = `"$title`";`n}`n`n" + $mainContent
            [IO.File]::WriteAllText($targetFile, $finalContent, [System.Text.Encoding]::UTF8)
            Write-Host "Created: $targetFile"
        } else {
            Write-Host "Main wrapper not found in $sourceFile"
        }
    } else {
        Write-Host "Source file not found: $sourceFile"
    }
}
