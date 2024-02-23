class CreateOrganizations < ActiveRecord::Migration[7.1]
  def change
    create_table :organizations do |t|
      t.integer :organization_type, null: false, default: 0
      t.string :name, null: false
      t.string :domain, null: false

      t.timestamps
    end

    add_index :organizations, :domain, unique: true
  end
end
