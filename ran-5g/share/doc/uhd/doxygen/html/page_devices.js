var page_devices =
[
    [ "Manual Parts", "index.html#autotoc_md11", [
      [ "Further Information", "index.html#autotoc_md12", null ],
      [ "Installing and/or Building UHD", "index.html#autotoc_md13", null ],
      [ "General Usage Manuals", "page_devices.html#autotoc_md0", null ],
      [ "USRP N-Series Devices", "page_devices.html#autotoc_md1", null ],
      [ "USRP B-Series Devices", "page_devices.html#autotoc_md2", null ],
      [ "USRP E-Series Devices", "page_devices.html#autotoc_md3", null ],
      [ "USRP X-Series Devices", "page_devices.html#autotoc_md4", null ],
      [ "USRP Legacy Series", "page_devices.html#autotoc_md5", null ],
      [ "Daughterboards", "page_devices.html#autotoc_md6", null ],
      [ "OctoClock", "page_devices.html#autotoc_md7", null ],
      [ "Usrpctl", "page_devices.html#autotoc_md8", null ]
    ] ],
    [ "General Application Notes", "page_general.html", [
      [ "Tuning Notes", "page_general.html#general_tuning", [
        [ "Two-stage tuning process", "page_general.html#general_tuning_process", [
          [ "Tuning the receive chain:", "page_general.html#general_tuning_rxchain", null ]
        ] ],
        [ "DSP Tuning", "page_general.html#general_tuning_dsp", null ],
        [ "Sign of DSP frequency on TX vs. RX tuning", "page_general.html#general_tuning_dsp_sign", null ],
        [ "RF front-end settling time", "page_general.html#general_tuning_rfsettling", [
          [ "Pseudo-code for dealing with settling time after tuning on receive:", "page_general.html#general_tuning_waitcode", null ]
        ] ],
        [ "Tuning multiple channels using a shared LO", "page_general.html#general_tuning_multiplechannels", null ]
      ] ],
      [ "Sample rate notes", "page_general.html#general_sampleratenotes", [
        [ "Automatic master-clock selection", "page_general.html#general_sampleratenotes_automatic", null ],
        [ "Master clock rate and Nyquist", "page_general.html#general_sampleratenotes_nyquist", null ]
      ] ],
      [ "Overflow/Underflow Notes", "page_general.html#general_ounotes", [
        [ "Overflow notes", "page_general.html#general_ounotes_overflow", null ],
        [ "Underrun notes", "page_general.html#general_ounotes_underrun", null ]
      ] ],
      [ "Threading Notes", "page_general.html#general_threading", [
        [ "Thread safety notes", "page_general.html#general_threading_safety", null ],
        [ "Thread priority scheduling", "page_general.html#general_threading_prio", null ]
      ] ],
      [ "Miscellaneous Notes", "page_general.html#general_misc", [
        [ "Support for dynamically loadable modules", "page_general.html#general_misc_dynamic", null ],
        [ "Disabling or redirecting prints to stdout", "page_general.html#general_misc_prints", null ]
      ] ]
    ] ],
    [ "Device Identification", "page_identification.html", [
      [ "Identifying USRP Devices", "page_identification.html#id_identifying", [
        [ "Common device identifiers", "page_identification.html#id_identifying_common", null ],
        [ "Device discovery via command line", "page_identification.html#id_identifying_cmdline", null ],
        [ "Device discovery through the API", "page_identification.html#id_identifying_api", null ],
        [ "Device properties", "page_identification.html#id_identifying_props", null ]
      ] ],
      [ "Naming a USRP Device", "page_identification.html#id_naming", [
        [ "Set a custom name", "page_identification.html#id_naming_set", null ],
        [ "Discovery via name", "page_identification.html#id_naming_discovery", null ]
      ] ]
    ] ],
    [ "Configuring Devices and Streamers", "page_configuration.html", [
      [ "Device Configuration through address string", "page_configuration.html#config_devaddr", null ],
      [ "Specifying the Subdevice", "page_configuration.html#config_subdev", [
        [ "USRP Family Motherboard Slot Names", "page_configuration.html#config_subdev_slotnames", null ],
        [ "USRP Family Motherboard Slot Names", "page_configuration.html#config_subdev_default", null ],
        [ "Daughterboard Frontend Names", "page_configuration.html#config_subdev_dbnames", null ]
      ] ],
      [ "Streaming Arguments (Stream Args)", "page_configuration.html#config_stream_args", [
        [ "CPU Data Format Specification", "page_configuration.html#config_stream_args_cpu_format", null ],
        [ "Over-the-wire Data Format Specification", "page_configuration.html#config_stream_args_otw_format", null ],
        [ "Additional Stream Arguments", "page_configuration.html#config_stream_args_args", [
          [ "Transport-related Stream Arguments", "page_configuration.html#config_stream_args_transport", null ]
        ] ],
        [ "Channels", "page_configuration.html#config_stream_args_channels", null ]
      ] ],
      [ "Device Configuration through MPM configuration files", "page_configuration.html#config_mpm", null ]
    ] ],
    [ "Multiple USRP configurations", "page_multiple.html", [
      [ "Introduction", "page_multiple.html#multiple_intro", null ],
      [ "Setting up devices", "page_multiple.html#multiple_setup", null ],
      [ "Channel and Device Numbering", "page_multiple.html#multiple_channumbers", null ],
      [ "MIMO Operation", "page_multiple.html#multiple_mimo", null ]
    ] ],
    [ "Firmware and FPGA Images", "page_images.html", [
      [ "Images Overview", "page_images.html#images_overview", null ],
      [ "Pre-built Images", "page_images.html#images_prebuild", [
        [ "UHD Images Downloader", "page_images.html#images_prebuilt_downloader", null ],
        [ "Platform installers", "page_images.html#images_prebuilt_installers", null ],
        [ "Archive install", "page_images.html#images_prebuilt_archive", null ]
      ] ],
      [ "Building Images", "page_images.html#images_building", [
        [ "Xilinx FPGA builds", "page_images.html#images_building_xilinx", null ],
        [ "ZPU firmware builds", "page_images.html#images_building_zpu", null ],
        [ "Altera FPGA builds", "page_images.html#images_building_altera", null ],
        [ "FX2 firmware builds", "page_images.html#images_building_fx2", null ]
      ] ]
    ] ],
    [ "Transport Notes", "page_transport.html", [
      [ "Introduction", "page_transport.html#transport_intro", [
        [ "Overriding transport parameters", "page_transport.html#transport_param_overrides", null ]
      ] ],
      [ "UDP Transport (Sockets)", "page_transport.html#transport_udp", [
        [ "Data size restrictions in transport", "page_transport.html#transport_data_size_restrictions", null ],
        [ "Transport parameters", "page_transport.html#transport_udp_params", null ],
        [ "Flow control parameters", "page_transport.html#transport_udp_flow", null ],
        [ "Resize socket buffers", "page_transport.html#transport_udp_sockbufs", null ],
        [ "Latency Optimization", "page_transport.html#transport_udp_latency", null ],
        [ "Linux specific notes", "page_transport.html#transport_udp_linux", null ],
        [ "Windows specific notes", "page_transport.html#transport_udp_windows", null ],
        [ "Mac OS X specific notes", "page_transport.html#transport_udp_osx", null ]
      ] ],
      [ "USB Transport (LibUSB)", "page_transport.html#transport_usb", [
        [ "Transport parameters", "page_transport.html#transport_usb_params", null ],
        [ "Setup Udev for USB (Linux)", "page_transport.html#transport_usb_udev", null ],
        [ "Install USB driver (Windows)", "page_transport.html#transport_usb_installwin", null ]
      ] ],
      [ "PCIe Transport (NI-RIO)", "page_transport.html#transport_pcie", [
        [ "Transport parameters", "page_transport.html#transport_pcie_params", null ]
      ] ]
    ] ],
    [ "Device Synchronization", "page_sync.html", [
      [ "Common Reference Signals", "page_sync.html#sync_commonref", [
        [ "External PPS and 10 MHz reference signals", "page_sync.html#sync_commonref_pps", null ],
        [ "MIMO cable reference signals (N200-Series, USRP2)", "page_sync.html#sync_commonref_mimo", null ]
      ] ],
      [ "Synchronizing the Device Time", "page_sync.html#sync_time", [
        [ "Method 1 - poll the USRP time registers", "page_sync.html#sync_time_reg", null ],
        [ "Method 2 - query the GPSDO for seconds", "page_sync.html#sync_time_gpsdo", null ],
        [ "Method 3 - MIMO cable", "page_sync.html#sync_time_mimocable", null ]
      ] ],
      [ "Synchronizing Channel Phase", "page_sync.html#sync_phase", [
        [ "Align CORDICs in the DSP", "page_sync.html#sync_phase_cordics", null ],
        [ "Align LOs in the front-end (SBX, UBX)", "page_sync.html#sync_phase_lo", null ],
        [ "Align LOs in the front-end (others)", "page_sync.html#sync_phase_lootherfe", null ]
      ] ]
    ] ],
    [ "Timed Commands", "page_timedcmds.html", [
      [ "Stream Commands", "page_timedcmds.html#timedcmds_stream_cmds", null ],
      [ "General Timed Commands", "page_timedcmds.html#timedcmds_gen_cmds", [
        [ "Command Queues", "page_timedcmds.html#timedcmds_gen_cmds_qs", null ],
        [ "Which commands can be timed?", "page_timedcmds.html#timedcmds_gen_cmds_what", null ]
      ] ],
      [ "Command Time Resolution", "page_timedcmds.html#timedcmds_res", null ]
    ] ],
    [ "Device Calibration and Frontend Correction", "page_calibration.html", [
      [ "Self-Calibration", "page_calibration.html#calibration_self", [
        [ "Calibration Utilities", "page_calibration.html#calibration_self_utils", null ],
        [ "Calibration Data", "page_calibration.html#calibration_data", null ],
        [ "Modify Calibration Data", "page_calibration.html#modify_cal_data", null ],
        [ "Converting UHD 3.x calibration data to UHD 4", "page_calibration.html#calibration_data_csv", null ],
        [ "Ignoring Calibration Files", "page_calibration.html#ignore_cal_file", null ]
      ] ],
      [ "Frontend Corrections", "page_calibration.html#calibration_fe_corr", [
        [ "Single-Tap DC Offset Compensation", "page_calibration.html#calibration_fe_corr_dc_offset", null ],
        [ "Single-Point IQ offset compensation", "page_calibration.html#calibration_fe_corr_iq_offset", null ]
      ] ]
    ] ],
    [ "The Module Peripheral Manager (MPM) Architecture", "page_mpm.html", [
      [ "Architecture Overview", "page_mpm.html#mpm_arch", null ],
      [ "Device Claiming", "page_mpm.html#mpm_arch_claiming", null ],
      [ "Network vs. Embedded Mode", "page_mpm.html#mpm_modes", null ],
      [ "Debugging Tools", "page_mpm.html#mpm_debug", [
        [ "Python-based Debugging", "page_mpm.html#mpm_debug_python", null ],
        [ "MPM Tools", "page_mpm.html#mpm_debug_other", null ]
      ] ],
      [ "Hijack Mode", "page_mpm.html#mpm_shell_hijack", null ]
    ] ],
    [ "DPDK, Data Plane Development Kit", "page_dpdk.html", [
      [ "DPDK Overview", "page_dpdk.html#dpdk_overview", null ],
      [ "DPDK Setup", "page_dpdk.html#dpdk_setup", [
        [ "DPDK Installation Instructions", "page_dpdk.html#dpdk_installation", null ],
        [ "System Configuration", "page_dpdk.html#dpdk_system_configuration", null ],
        [ "NIC Configuration", "page_dpdk.html#dpdk_nic_config", null ]
      ] ],
      [ "Using DPDK in UHD", "page_dpdk.html#dpdk_using", [
        [ "Enabling DPDK with UHD Device Args", "page_dpdk.html#dpdk_device_args", null ],
        [ "DPDK Link Detection", "page_dpdk.html#dpdk_link_detection", null ],
        [ "Troubleshooting", "page_dpdk.html#dpdk_troubleshooting", null ]
      ] ]
    ] ],
    [ "Configuration Files", "page_configfiles.html", [
      [ "Format of the configuration files", "page_configfiles.html#configfiles_format", null ],
      [ "Configuring USRPs", "page_configfiles.html#configfiles_usrps", null ],
      [ "Configuring UHD Sessions", "page_configfiles.html#configfiles_uhd_session", null ],
      [ "Configuring DPDK", "page_configfiles.html#configfiles_usrps_dpdk", null ],
      [ "Configuring MPM", "page_configfiles.html#configfiles_usrps_mpm", null ],
      [ "Location of configuration files", "page_configfiles.html#configfiles_location", null ]
    ] ],
    [ "Compat Numbers", "page_compat.html", [
      [ "Major and Minor Compat Numbers", "page_compat.html#compat_minor_major", null ],
      [ "B200-Series Compat Numbers", "page_compat.html#compat_b2", null ],
      [ "X300 and USRP2/N210 Series Compat Numbers", "page_compat.html#compat_x3u2", null ],
      [ "MPM Devices (N310, E320, X4x0)", "page_compat.html#compat_mpm", null ],
      [ "RFNoC Components", "page_compat.html#compat_rfnoc", null ],
      [ "FAQ", "page_compat.html#compat_faq", [
        [ "Why is only one version of the compat number supported?", "page_compat.html#compat_faq_why1", null ],
        [ "Why are there so many different compat numbers?", "page_compat.html#compat_faq_whymany", null ]
      ] ]
    ] ],
    [ "Power Level Controls", "page_power.html", [
      [ "Power Level Controls: Overview", "page_power.html#power_overview", null ],
      [ "RX and TX reference power levels", "page_power.html#power_ref_levels", null ],
      [ "Amplitude Ranges and Clipping", "page_power.html#power_amp_rate", null ],
      [ "Retaining gain or power levels across frequency", "page_power.html#power_tune_owner", null ],
      [ "Device Implementations of Power Level APIs", "page_power.html#power_implementation", null ],
      [ "Calibration Table Storage", "page_power.html#power_storage", null ],
      [ "Calibrating your own device", "page_power.html#power_usercal", [
        [ "Calibrating multiple paths at once", "page_power.html#power_cal_switch", null ],
        [ "Extending the calibration utility for custom drivers", "page_power.html#power_usercal_extend", [
          [ "VISA/SCPI based devices", "page_power.html#power_usercal_extend_visa", null ],
          [ "Other measurement devices", "page_power.html#power_usercal_extend_generic", null ]
        ] ]
      ] ]
    ] ],
    [ "Extension Framework documentation", "page_extension.html", [
      [ "Introduction", "page_extension.html#extension_intro", null ],
      [ "Capabilities of the Extension Framework", "page_extension.html#extension_capabilities", [
        [ "How to use the Extension Framework", "page_extension.html#extension_howto", null ]
      ] ]
    ] ],
    [ "USRP2 and N2x0 Series", "page_usrp2.html", "page_usrp2" ],
    [ "USRP N3xx Series", "page_usrp_n3xx.html", [
      [ "Comparative features list", "page_usrp_n3xx.html#n3xx_feature_list", [
        [ "N310/N300 4-channel/2-channel Transceiver", "page_usrp_n3xx.html#n3xx_feature_list_mg", null ],
        [ "N320/N321 2-channel Transceiver", "page_usrp_n3xx.html#n3xx_feature_list_rh", null ]
      ] ],
      [ "Overview", "page_usrp_n3xx.html#n3xx_overview", [
        [ "The Zynq CPU/FPGA and host operating system", "page_usrp_n3xx.html#n3xx_zynq", null ],
        [ "The STM32 microcontroller", "page_usrp_n3xx.html#n3xx_micro", null ],
        [ "The SD card", "page_usrp_n3xx.html#n3xx_sdcard", null ]
      ] ],
      [ "Getting started", "page_usrp_n3xx.html#n3xx_getting_started", [
        [ "Assembling the N3XX", "page_usrp_n3xx.html#n3xx_getting_started_assembling", null ],
        [ "Updating the file system", "page_usrp_n3xx.html#n3xx_getting_started_fs_update", null ],
        [ "Serial connection", "page_usrp_n3xx.html#n3xx_getting_started_serial", [
          [ "Connecting to the microcontroller", "page_usrp_n3xx.html#n3xx_getting_started_serial_micro", null ]
        ] ],
        [ "SSH connection", "page_usrp_n3xx.html#n3xx_getting_started_ssh", null ],
        [ "Network Connectivity", "page_usrp_n3xx.html#n3xx_getting_started_connectivity", null ],
        [ "Security-related settings", "page_usrp_n3xx.html#n3xx_getting_started_security", null ],
        [ "Updating the FPGA", "page_usrp_n3xx.html#n3xx_getting_started_fpga_update", [
          [ "FPGA Image Flavors", "page_usrp_n3xx.html#n3xx_getting_started_fpga_update_flavors", null ]
        ] ]
      ] ],
      [ "Using an N3XX USRP from UHD", "page_usrp_n3xx.html#n3xx_usage", [
        [ "Device arguments", "page_usrp_n3xx.html#n3xx_usage_device_args", null ],
        [ "Device Initialization", "page_usrp_n3xx.html#n3xx_usage_init", null ],
        [ "Subdev Specifications", "page_usrp_n3xx.html#n3xx_usage_subdevspec", null ],
        [ "The sensor API", "page_usrp_n3xx.html#n3xx_usage_sensors", null ]
      ] ],
      [ "Remote Management", "page_usrp_n3xx.html#n3xx_rasm", [
        [ "Mender: Remote update capability", "page_usrp_n3xx.html#n3xx_rasm_mender", null ],
        [ "Salt: Remote configuration management and execution", "page_usrp_n3xx.html#n3xx_rasm_salt", null ]
      ] ],
      [ "Clock/Time Synchronization", "page_usrp_n3xx.html#n3xx_synchronization", [
        [ "Overview", "page_usrp_n3xx.html#n3xx_synchronization_overview", null ],
        [ "Internal references", "page_usrp_n3xx.html#n3xx_synchronization_internal", null ],
        [ "External references", "page_usrp_n3xx.html#n3xx_synchronization_external", null ],
        [ "White Rabbit", "page_usrp_n3xx.html#n3xx_synchronization_whiterabbit", null ]
      ] ],
      [ "The Front-Panel GPIO", "page_usrp_n3xx.html#n3xx_fpgio", null ],
      [ "Troubleshooting", "page_usrp_n3xx.html#n3xx_troubleshooting", [
        [ "Errors while streaming", "page_usrp_n3xx.html#n3xx_troubleshooting_seqerrs", null ],
        [ "Built-in Self-Test (BiST)", "page_usrp_n3xx.html#n3xx_troubleshooting_bist", null ]
      ] ],
      [ "Theory of Operation", "page_usrp_n3xx.html#n3xx_theory_of_ops", null ],
      [ "Building custom filesystems and SD card images", "page_usrp_n3xx.html#n3xx_fsbuild", [
        [ "Using Docker to build filesystems", "page_usrp_n3xx.html#n3xx_fsbuild_docker", null ]
      ] ],
      [ "Modifying and compiling UHD and MPM for the N3XX", "page_usrp_n3xx.html#n3xx_software_dev", [
        [ "Compiling MPM natively", "page_usrp_n3xx.html#n3xx_software_dev_mpm_native", null ],
        [ "Obtaining an SDK", "page_usrp_n3xx.html#n3xx_software_dev_sdk", null ],
        [ "SDK Usage", "page_usrp_n3xx.html#n3xx_software_dev_sdkusage", [
          [ "Building UHD", "page_usrp_n3xx.html#n3xx_software_dev_uhd", null ],
          [ "Building GNU Radio", "page_usrp_n3xx.html#n3xx_software_dev_gr", null ]
        ] ]
      ] ],
      [ "N310-specific Features", "page_usrp_n3xx.html#n3xx_mg", [
        [ "Front and Rear Panel", "page_usrp_n3xx.html#n3xx_mg_panels", null ],
        [ "Device Initialization (Fast and Slow)", "page_usrp_n3xx.html#n3xx_mg_initialization", null ],
        [ "RF Calibrations", "page_usrp_n3xx.html#n3xx_mg_calibrations", null ],
        [ "External LOs", "page_usrp_n3xx.html#n3xx_mg_external_lo", null ],
        [ "Storing user data in the EEPROM", "page_usrp_n3xx.html#n3xx_mg_eeprom", null ],
        [ "Module and Motherboard/Daughterboard Revisions", "page_usrp_n3xx.html#n3xx_mg_revs", null ],
        [ "FPGA Register Map", "page_usrp_n3xx.html#n3xx_mg_regmap", null ],
        [ "EEPROM flags", "page_usrp_n3xx.html#n3xx_mg_eeprom_flags", null ],
        [ "Gain Profiles", "page_usrp_n3xx.html#n3xx_mg_gain_profiles", null ],
        [ "Custom Band Edges", "page_usrp_n3xx.html#n3xx_mg_custom_band_edges", null ]
      ] ],
      [ "In this example, the second Rx band would start at 431 MHz.", "page_usrp_n3xx.html#autotoc_md59", [
        [ "Filter API", "page_usrp_n3xx.html#n3xx_filter_api", null ]
      ] ],
      [ "N32x-specific Features", "page_usrp_n3xx.html#n3xx_rh", [
        [ "Front and Rear Panel", "page_usrp_n3xx.html#n3xx_rh_panels", null ],
        [ "Device Initialization (Fast and Slow)", "page_usrp_n3xx.html#n3xx_rh_initialization", null ],
        [ "RF Calibrations", "page_usrp_n3xx.html#n3xx_rh_calibrations", null ],
        [ "External LOs", "page_usrp_n3xx.html#n3xx_rh_external_lo", null ],
        [ "N321 LO Distribution Board", "page_usrp_n3xx.html#n3xx_rh_lo_sharing", null ],
        [ "N320/N321 LO Sharing", "page_usrp_n3xx.html#n3xx_rh_lo_chaining", null ],
        [ "SFP+ and QSFP+ protocols", "page_usrp_n3xx.html#n3xx_rh_sfp_protocols", null ],
        [ "N320/N321 Frontend Corrections", "page_usrp_n3xx.html#n3xx_rh_frontend_corrections", null ],
        [ "EEPROM flags", "page_usrp_n3xx.html#n3xx_rh_eeprom_flags", null ]
      ] ]
    ] ],
    [ "USRP B2x0 Series", "page_usrp_b200.html", "page_usrp_b200" ],
    [ "USRP E3xx Series", "page_usrp_e3xx.html", [
      [ "Comparative features list", "page_usrp_e3xx.html#e3xx_feature_list", [
        [ "E310", "page_usrp_e3xx.html#e3xx_feature_list_e310", null ],
        [ "E320", "page_usrp_e3xx.html#e3xx_feature_list_e320", null ]
      ] ],
      [ "E310 Overview", "page_usrp_e3xx.html#e310_overview", [
        [ "The Zynq CPU/FPGA and host operating system", "page_usrp_e3xx.html#e310_zynq", null ],
        [ "E310 Migration Guide to MPM architecture", "page_usrp_e3xx.html#e31x_migration", null ]
      ] ],
      [ "E320 Overview", "page_usrp_e3xx.html#e320_overview", [
        [ "The Zynq CPU/FPGA and host operating system", "page_usrp_e3xx.html#e320_zynq", null ],
        [ "The STM32 microcontroller", "page_usrp_e3xx.html#e320_micro", null ],
        [ "FPGA Image Flavors", "page_usrp_e3xx.html#e320_fpga_flavours", null ]
      ] ],
      [ "The SD card", "page_usrp_e3xx.html#e3xx_sdcard", null ],
      [ "Getting started", "page_usrp_e3xx.html#e3xx_getting_started", [
        [ "Assembling the E3XX", "page_usrp_e3xx.html#e3xx_getting_started_assembling", null ],
        [ "Updating the file system", "page_usrp_e3xx.html#e3xx_getting_started_fs_update", [
          [ "E310/E312/E313 file system", "page_usrp_e3xx.html#e31x_fs", null ],
          [ "E320 file system", "page_usrp_e3xx.html#e320_fs", null ],
          [ "Updating the SD card", "page_usrp_e3xx.html#update_sdcard", [
            [ "Method 1", "page_usrp2.html#autotoc_md52", null ],
            [ "Method 2 (Linux Only)", "page_usrp2.html#autotoc_md53", null ],
            [ "On Linux", "page_usrp_n3xx.html#n3xx_fs_update_linux", null ],
            [ "On Windows", "page_usrp_n3xx.html#n3xx_fs_update_windows", null ],
            [ "On Linux", "page_usrp_e3xx.html#update_sdcard_linux", null ],
            [ "On Windows", "page_usrp_e3xx.html#update_sdcard_windows", null ]
          ] ]
        ] ]
      ] ],
      [ "Building custom filesystems and SD card images", "page_usrp_e3xx.html#e3xx_fsbuild", [
        [ "Using Docker to build filesystems", "page_usrp_e3xx.html#e3xx_fsbuild_docker", null ],
        [ "Serial connection", "page_usrp_e3xx.html#e3xx_getting_started_serial", [
          [ "Connecting to the microcontroller", "page_usrp_e3xx.html#e320_getting_started_serial_micro", null ]
        ] ],
        [ "SSH connection", "page_usrp_e3xx.html#e3xx_getting_started_ssh", null ],
        [ "Network Connectivity", "page_usrp_e3xx.html#e3xx_getting_started_connectivity", null ],
        [ "Network Mode", "page_usrp_e3xx.html#e3xx_getting_started_network_mode", null ],
        [ "Security-related settings", "page_usrp_e3xx.html#e3xx_getting_started_security", null ],
        [ "Updating the FPGA", "page_usrp_e3xx.html#e3xx_getting_started_fpga_update", null ]
      ] ],
      [ "Using an E3XX USRP from UHD", "page_usrp_e3xx.html#e3xx_usage", [
        [ "Device arguments", "page_usrp_e3xx.html#e3xx_usage_device_args", null ],
        [ "The sensor API", "page_usrp_e3xx.html#e3xx_usage_sensors", [
          [ "E31X Sensors", "page_usrp_e3xx.html#e310_sensors", null ],
          [ "E320 Sensors", "page_usrp_e3xx.html#e320_sensors", null ]
        ] ],
        [ "Power API", "page_usrp_e3xx.html#e3xx_power_api", null ]
      ] ],
      [ "Remote Management", "page_usrp_e3xx.html#e3xx_rasm", [
        [ "Mender: Remote update capability", "page_usrp_e3xx.html#e3xx_rasm_mender", null ],
        [ "Salt: Remote configuration management and execution", "page_usrp_e3xx.html#e3xx_rasm_salt", null ]
      ] ],
      [ "Internal or Front-Panel GPIO", "page_usrp_e3xx.html#e3xx_gpio", null ],
      [ "Troubleshooting", "page_usrp_e3xx.html#e3xx_troubleshooting", [
        [ "E320 Built-in Self-Test (BiST)", "page_usrp_e3xx.html#e3xx_troubleshooting_bist", null ]
      ] ],
      [ "Theory of Operation", "page_usrp_e3xx.html#e3xx_theory_of_ops", null ],
      [ "Modifying and compiling UHD and MPM for the E320", "page_usrp_e3xx.html#e3xx_software_dev", [
        [ "Compiling MPM natively", "page_usrp_e3xx.html#e3xx_software_dev_mpm_native", null ],
        [ "Obtaining an SDK", "page_usrp_e3xx.html#e3xx_software_dev_sdk", null ],
        [ "SDK Usage", "page_usrp_e3xx.html#e3xx_software_dev_sdkusage", [
          [ "Building UHD", "page_usrp_e3xx.html#e3xx_software_dev_uhd", null ],
          [ "Building GNU Radio", "page_usrp_e3xx.html#e3xx_software_dev_gr", null ]
        ] ]
      ] ],
      [ "E310-specific Features", "page_usrp_e3xx.html#e31x_device", [
        [ "Front Panel", "page_usrp_e3xx.html#e31x_hw_front_panel", null ],
        [ "Rear Panel", "page_usrp_e3xx.html#e31x_hw_rear_panel", null ],
        [ "Clock and Time Synchronization", "page_usrp_e3xx.html#e31x_hw_sync", null ],
        [ "PPS - Pulse Per Second", "page_usrp_e3xx.html#e31x_hw_pps", null ],
        [ "Internal GPS", "page_usrp_e3xx.html#e31x_hw_gps", null ],
        [ "Internal GPIO", "page_usrp_e3xx.html#e31x_hw_gpio", [
          [ "Connector", "page_usrp_e3xx.html#autotoc_md54", null ],
          [ "Pin Mapping", "page_usrp_e3xx.html#autotoc_md55", null ]
        ] ],
        [ "Debugging custom FPGA designs with Xilinx Chipscope", "page_usrp_e3xx.html#e31x_hw_chipscope", [
          [ "Connector", "page_usrp_e3xx.html#autotoc_md56", null ],
          [ "Pin Mapping", "page_usrp_e3xx.html#autotoc_md57", null ]
        ] ],
        [ "Battery notes", "page_usrp_e3xx.html#e312_battery", [
          [ "Connector", "page_usrp_e3xx.html#e312_battery_connector", null ],
          [ "Driver", "page_usrp_e3xx.html#e312_battery_information", null ],
          [ "Calibration Procedure", "page_usrp_e3xx.html#e312_battery_calibration", null ]
        ] ],
        [ "Daughterboard notes", "page_usrp_e3xx.html#e31x_dboards", [
          [ "Frontend tuning", "page_usrp_e3xx.html#e31x_dboard_e310_tuning", null ],
          [ "Frontend gain", "page_usrp_e3xx.html#e31x_dboard_e310_gain", null ],
          [ "Frontend LO lock status", "page_usrp_e3xx.html#e31x_dboard_e310_pll", null ],
          [ "Frontend Filter and Antenna Switches", "page_usrp_e3xx.html#e31x_dboard_e310_band_select", null ],
          [ "Frontend Side A Filter and Antenna Switches", "page_usrp_e3xx.html#e31x_dboard_e310_frontend_a_switches", null ],
          [ "Frontend Side B Filter and Antenna Switches", "page_usrp_e3xx.html#e31x_dboard_e310_frontend_b_switches", null ]
        ] ]
      ] ],
      [ "E320-specific Features", "page_usrp_e3xx.html#e320_neon", [
        [ "Front and Rear Panel", "page_usrp_e3xx.html#e320_panels", null ],
        [ "Clock and Time Synchronization", "page_usrp_e3xx.html#e320_hw_sync", null ],
        [ "Front Panel GPIO", "page_usrp_e3xx.html#e320_gpio", [
          [ "Front Panel GPIO Connections", "page_usrp_e3xx.html#autotoc_md58", null ]
        ] ],
        [ "EEPROM flags", "page_usrp_e3xx.html#e320_eeprom_flags", null ]
      ] ],
      [ "E3XX FPGA Register Map", "page_usrp_e3xx.html#e3xx_regmap", null ]
    ] ],
    [ "USRP X3x0 Series", "page_usrp_x3x0.html", "page_usrp_x3x0" ],
    [ "USRP X4x0 Series", "page_usrp_x4xx.html", "page_usrp_x4xx" ],
    [ "USRP1", "page_usrp1.html", [
      [ "Comparative features list", "page_usrp1.html#usrp1_features", null ],
      [ "Specify a Non-standard Image", "page_usrp1.html#usrp1_imgs", null ],
      [ "Missing and Emulated Features", "page_usrp1.html#usrp1_emul", [
        [ "List of emulated features", "page_usrp1.html#usrp1_emul_list", null ],
        [ "List of missing features", "page_usrp1.html#usrp1_emul_listmissing", null ]
      ] ],
      [ "Hardware Setup Notes", "page_usrp1.html#usrp1_hw", [
        [ "External clock modification", "page_usrp1.html#usrp1_hw_extclk", null ]
      ] ],
      [ "Known Issues", "page_usrp1.html#usrp1_known_issues", null ]
    ] ],
    [ "USRP B100 Series", "page_usrp_b100.html", [
      [ "Comparative features list", "page_usrp_b100.html#b100_features", null ],
      [ "Specify a Non-standard Image", "page_usrp_b100.html#b100_imgs", null ],
      [ "Changing the Master Clock Rate", "page_usrp_b100.html#b100_mcr", [
        [ "Set 61.44 MHz - uses external VCXO", "page_usrp_b100.html#b100_mcr_vcxo", null ],
        [ "Set other rates - uses internal VCO", "page_usrp_b100.html#b100_mcr_vco", null ]
      ] ],
      [ "Hardware setup notes", "page_usrp_b100.html#b100_hw", [
        [ "Front panel LEDs", "page_usrp_b100.html#b100_hw_leds", null ]
      ] ],
      [ "Miscellaneous", "page_usrp_b100.html#b100_misc", [
        [ "Available Sensors", "page_usrp_b100.html#b100_misc_sensors", null ],
        [ "Known Issues", "page_usrp_b100.html#b100_known_issues", null ]
      ] ]
    ] ],
    [ "USRP-E1x0 Series", "page_usrp_e1x0.html", "page_usrp_e1x0" ],
    [ "Daughterboards", "page_dboards.html", "page_dboards" ],
    [ "OctoClock", "page_octoclock.html", [
      [ "Feature list", "page_octoclock.html#octoclock_features", null ],
      [ "Detecting an Ethernet-compatible device", "page_octoclock.html#detecting_new_unit", null ],
      [ "Upgrading your device", "page_octoclock.html#upgrading_device", [
        [ "Getting the latest firmware images", "page_octoclock.html#getting_latest", null ],
        [ "Burning the bootloader onto the device", "page_octoclock.html#bootloader", null ],
        [ "Uploading the firmware via Ethernet", "page_octoclock.html#firmware", null ],
        [ "Updating the device's EEPROM", "page_octoclock.html#eeprom", null ]
      ] ],
      [ "Using your device", "page_octoclock.html#usage", [
        [ "The boot process", "page_octoclock.html#boot_process", null ],
        [ "Selecting a reference", "page_octoclock.html#selecting", null ],
        [ "Front Panel LEDs", "page_octoclock.html#front_panel_leds", null ],
        [ "Communication with UHD", "page_octoclock.html#uhd", null ]
      ] ]
    ] ],
    [ "Usrpctl", "page_usrpctl.html", [
      [ "Description", "page_usrpctl.html#usrpctl_description", null ],
      [ "$ID", "page_usrpctl.html#usrpctl_id", null ],
      [ "$COMMAND", "page_usrpctl.html#usrpctl_command", null ],
      [ "$OPTIONS", "page_usrpctl.html#usrpctl_options", null ],
      [ "Available commands", "page_usrpctl.html#usrpctl_commands", [
        [ "find", "page_usrpctl.html#usrpctl_find", null ],
        [ "probe", "page_usrpctl.html#usrpctl_probe", null ],
        [ "reset", "page_usrpctl.html#usrpctl_reset", null ]
      ] ]
    ] ]
];