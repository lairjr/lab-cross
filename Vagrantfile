Vagrant.configure(2) do |config|
  config.vm.define "devEnv" do |devEnv|
    devEnv.vm.network "forwarded_port", guest: 80, host: 8080
    devEnv.vm.box = "ubuntu/trusty64"

    devEnv.vm.provision "chef_solo" do |chef|
      chef.add_recipe "nodejs"
      chef.add_recipe "docker"
    end
  end
  # config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
  #   vb.memory = "1024"
  # end
  # config.vm.provision "shell", inline: <<-SHELL
  #   sudo apt-get update
  #   sudo apt-get install -y apache2
  # SHELL
end
