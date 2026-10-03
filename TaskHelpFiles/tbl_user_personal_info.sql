USE [fotbalit]
GO

/****** Object:  Table [dbo].[tbl_user_personal_info]    Script Date: 9/28/2026 6:06:00 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[tbl_user_personal_info](
	[person_id] [bigint] IDENTITY(1,1) NOT NULL,
	[user_id_FK] [bigint] NULL,
	[nationality_id_FK] [bigint] NULL,
	[stateIdFK] [bigint] NULL,
	[coach] [nvarchar](150) NULL,
	[blood_type] [nvarchar](2) NULL,
	[name] [nvarchar](50) NULL,
	[family] [nvarchar](50) NULL,
	[middel_name] [nvarchar](50) NULL,
	[alias_name] [nvarchar](50) NULL,
	[father_name] [nvarchar](50) NULL,
	[father_job] [nvarchar](50) NULL,
	[international_id] [nvarchar](50) NULL,
	[id_no] [nvarchar](50) NULL,
	[address] [nvarchar](max) NULL,
	[address2] [nvarchar](max) NULL,
	[birth_date_shamsi] [nvarchar](10) NULL,
	[birth_date_miladi] [nvarchar](10) NULL,
	[landline_phone] [nvarchar](11) NULL,
	[cell_phone] [nvarchar](11) NULL,
	[father_cell_phone] [nvarchar](11) NULL,
	[mother_cell_phone] [nvarchar](11) NULL,
	[essential_phone] [nvarchar](11) NULL,
	[parent_pohone] [nvarchar](11) NULL,
	[gender] [int] NULL,
	[site] [nvarchar](50) NULL,
	[weblog] [nvarchar](50) NULL,
	[serial_id] [nvarchar](50) NULL,
	[location_id] [nvarchar](50) NULL,
	[pictuer] [nvarchar](50) NULL,
	[religion] [int] NULL,
	[weight] [int] NULL,
	[Height] [int] NULL,
	[marital_status] [int] NULL,
	[military_service_status] [int] NULL,
	[job] [nvarchar](50) NULL,
	[health_status] [int] NULL,
	[citizenship] [bigint] NULL,
	[description] [nvarchar](max) NULL,
	[passport_no] [nvarchar](50) NULL,
	[passport_export_date] [nvarchar](10) NULL,
	[passport_expire_date] [nvarchar](10) NULL,
	[passport_file] [nvarchar](max) NULL,
	[passport_eng_name] [nvarchar](50) NULL,
	[passport_eng_family] [nvarchar](50) NULL,
	[passport_description] [nvarchar](max) NULL,
	[complete_percent] [int] NULL,
	[contact_complete_percent] [int] NULL,
	[telegram] [nvarchar](max) NULL,
	[instagram] [nvarchar](max) NULL,
	[facebook] [nvarchar](max) NULL,
	[linkdin] [nvarchar](max) NULL,
	[postal_code1] [nvarchar](10) NULL,
	[postal_code2] [nvarchar](10) NULL,
 CONSTRAINT [PK_tbl_person] PRIMARY KEY CLUSTERED 
(
	[person_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[tbl_user_personal_info]  WITH CHECK ADD  CONSTRAINT [FK_tbl_person_tbl_nationality] FOREIGN KEY([nationality_id_FK])
REFERENCES [dbo].[tbl_nationality] ([nationality_id])
GO

ALTER TABLE [dbo].[tbl_user_personal_info] CHECK CONSTRAINT [FK_tbl_person_tbl_nationality]
GO

ALTER TABLE [dbo].[tbl_user_personal_info]  WITH CHECK ADD  CONSTRAINT [FK_tbl_person_tbl_user] FOREIGN KEY([user_id_FK])
REFERENCES [dbo].[tbl_user] ([user_id])
GO

ALTER TABLE [dbo].[tbl_user_personal_info] CHECK CONSTRAINT [FK_tbl_person_tbl_user]
GO

ALTER TABLE [dbo].[tbl_user_personal_info]  WITH CHECK ADD  CONSTRAINT [FK_tbl_user_personal_info_tbl_state] FOREIGN KEY([stateIdFK])
REFERENCES [dbo].[tbl_state] ([state_id])
GO

ALTER TABLE [dbo].[tbl_user_personal_info] CHECK CONSTRAINT [FK_tbl_user_personal_info_tbl_state]
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'برای هریک از ملیتها یک کد ثابت در نظر گرفته میشود' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_user_personal_info', @level2type=N'COLUMN',@level2name=N'nationality_id_FK'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'تلفن ثابت' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_user_personal_info', @level2type=N'COLUMN',@level2name=N'landline_phone'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'تلفن ضروری' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_user_personal_info', @level2type=N'COLUMN',@level2name=N'essential_phone'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'مرد =1 -   زن=0' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_user_personal_info', @level2type=N'COLUMN',@level2name=N'gender'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'اسلام=1- غیر اسلام2' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_user_personal_info', @level2type=N'COLUMN',@level2name=N'religion'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'مجرد=0 - متاهل=1' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_user_personal_info', @level2type=N'COLUMN',@level2name=N'marital_status'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'پایان خدمت =1 - معاف از خدمت=2- دانشجو=3 - خرید خدمت=4 - محصل=5 - درحال خدمت=6 - کادر نظامی=7 - مشمول نمی باشم=8 - درحال اعزام=9 - سرباز قهرمان=10 - بازیکن خارجی=11' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'tbl_user_personal_info', @level2type=N'COLUMN',@level2name=N'military_service_status'
GO


