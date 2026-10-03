$pagesDir = "e:\amirce73\FootballSchoolMVC\Views\Pages"

$backDestinations = @{
    "attendance.cshtml"           = "/specialized-hub"
    "bank-info.cshtml"            = "/financial-hub"
    "bulletin.cshtml"             = "/dashboard"
    "certificate.cshtml"          = "/documents"
    "clothing-info.cshtml"        = "/profile-hub"
    "club-info.cshtml"            = "/profile-hub"
    "contact-info.cshtml"  
           = "/profile-hub"
    "documents.cshtml"            = "/profile-hub"
    "financial-hub.cshtml"        = "/dashboard"
    "financial-timeline.cshtml"   = "/financial-hub"
    "gallery.cshtml"              = "/dashboard"
    "insurance.cshtml"            = "/specialized-hub"
    "insurance-status.cshtml"     = "/specialized-hub"
    "passport-info.cshtml"        = "/profile-hub"
    "password.cshtml"             = "/profile-hub"
    "personal-info.cshtml"        = "/profile-hub"
    "profile-hub.cshtml"          = "/dashboard"
    "registration.cshtml"         = "/dashboard"
    "registration-history.cshtml" = "/specialized-hub"
    "specialized-hub.cshtml"      = "/dashboard"
    "sports-info.cshtml"          = "/profile-hub"
    "store.cshtml"                = "/dashboard"
    "talent.cshtml"               = "/specialized-hub"
    "training-backpack.cshtml"    = "/dashboard"
    "verification.cshtml"         = "/profile-hub"
}

foreach ($file in Get-ChildItem -Path $pagesDir -Filter *.cshtml) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $orig = $content

    # Fix faulty Topbar verification link if it was set to /logout or #
    $content = $content.Replace('href="/logout" style="color: rgb(51, 65, 85);"><i class="fa fa-shield"></i>تایید هویت', 'href="/verification" style="color: rgb(51, 65, 85);"><i class="fa fa-shield"></i>تایید هویت')
    $content = $content.Replace('href="#" style="color: rgb(51, 65, 85);"><i class="fa fa-shield"></i>تایید هویت', 'href="/verification" style="color: rgb(51, 65, 85);"><i class="fa fa-shield"></i>تایید هویت')
    $content = $content.Replace('href="#" style="color: #334155"><i class="fa fa-shield"></i>تایید هویت', 'href="/verification" style="color: #334155"><i class="fa fa-shield"></i>تایید هویت')
    $content = $content.Replace('href="#" style="color: #334155;"><i class="fa fa-shield"></i>تایید هویت', 'href="/verification" style="color: #334155;"><i class="fa fa-shield"></i>تایید هویت')

    # Ensure logout link points to /logout
    $content = $content.Replace('href="#" style="color: var(--danger); padding: 12px 16px;"><i class="fa fa-sign-out"></i> خروج', 'href="/logout" style="color: var(--danger); padding: 12px 16px;"><i class="fa fa-sign-out"></i> خروج')

    # Ensure notification bell navigates to /bulletin
    $content = [System.Text.RegularExpressions.Regex]::Replace(
        $content,
        '<button\s+class="btn-noti"\s+title="اعلان‌ها"(?!.*onclick)>',
        '<button class="btn-noti" title="اعلان‌ها" onclick="window.location.href=''/bulletin''" style="cursor: pointer;">'
    )

    # Ensure back buttons have exact onclick
    if ($backDestinations.ContainsKey($file.Name)) {
        $dest = $backDestinations[$file.Name]
        $content = [System.Text.RegularExpressions.Regex]::Replace(
            $content,
            '<button([^>]*class="[^"]*btn-back-top[^"]*")[^>]*>',
            "<button type=`"button`" class=`"btn-top-action btn-back-top`" onclick=`"window.location.href='$dest'`">"
        )
    }

    if ($content -ne $orig) {
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
        Write-Output "Applied fixes to: $($file.Name)"
    }
}
